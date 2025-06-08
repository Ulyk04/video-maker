const express = require('express');
const multer = require('multer'); 
const ffmpeg = require('fluent-ffmpeg'); 
const cors = require('cors'); 
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000; 


app.use(cors());
app.use(express.json()); 


const uploadsDir = path.join(__dirname, 'uploads');
const editedDir = path.join(__dirname, 'edited');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
if (!fs.existsSync(editedDir)) fs.mkdirSync(editedDir);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });


app.use('/edited-videos', express.static(editedDir));


app.post('/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }
    console.log('Video uploaded:', req.file.filename);
    res.json({
        message: 'Video uploaded successfully!',
        filePath: req.file.path, 
        fileName: req.file.filename 
    });
});


app.post('/edit-video', async (req, res) => {
    const { originalFilePath, trimStart, trimEnd, newTitle } = req.body;

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

             
            if (trimStart && trimEnd) {
                command.setStartTime(trimStart).setDuration(trimEnd - trimStart);
            }

          

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