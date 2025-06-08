const express = require('express');
const multer = require('multer'); // Для обработки загрузки файлов
const ffmpeg = require('fluent-ffmpeg'); // Обёртка для FFmpeg
const cors = require('cors'); // Для разрешения CORS-запросов
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000; // Выберите порт для вашего бэкенда

// Разрешаем CORS
app.use(cors());
app.use(express.json()); // Для обработки JSON-запросов

// Создаем папку для загруженных и отредактированных видео
const uploadsDir = path.join(__dirname, 'uploads');
const editedDir = path.join(__dirname, 'edited');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
if (!fs.existsSync(editedDir)) fs.mkdirSync(editedDir);

// Настраиваем multer для сохранения файлов
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Обслуживание статических файлов (отредактированных видео)
app.use('/edited-videos', express.static(editedDir));

// Роут для загрузки видео
app.post('/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }
    console.log('Video uploaded:', req.file.filename);
    res.json({
        message: 'Video uploaded successfully!',
        filePath: req.file.path, // Путь к оригинальному файлу на сервере
        fileName: req.file.filename // Имя файла
    });
});

// Роут для редактирования видео
app.post('/edit-video', async (req, res) => {
    const { originalFilePath, trimStart, trimEnd, newTitle } = req.body; // Получаем данные редактирования

    if (!originalFilePath) {
        return res.status(400).send('Original video file path is required.');
    }

    const outputFileName = `edited-${Date.now()}.mp4`;
    const outputFilePath = path.join(editedDir, outputFileName);

    try {
        await new Promise((resolve, reject) => {
            let command = ffmpeg(originalFilePath)
                .output(outputFilePath)
                .on('end', () => {
                    console.log('FFmpeg processing finished.');
                    resolve();
                })
                .on('error', (err) => {
                    console.error('FFmpeg error:', err);
                    reject(err);
                });

            // Пример: Обрезка видео
            if (trimStart && trimEnd) {
                command.setStartTime(trimStart).setDuration(trimEnd - trimStart);
            }

            // Пример: Добавление текста (более сложно, требует графических фильтров FFmpeg)
            // command.videoFilters(`drawtext=text='${newTitle}':x=(w-text_w)/2:y=H-th-10:fontcolor=white:fontsize=50`);
            // Для добавления текста вам может понадобиться установить шрифты на сервере,
            // а также использовать более сложную логику, например, с использованием `complexFilter`.

            command.run();
        });

        res.json({
            message: 'Video edited successfully!',
            editedVideoUrl: `http://localhost:${port}/edited-videos/${outputFileName}`
        });

    } catch (error) {
        res.status(500).json({ error: 'Video editing failed', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});