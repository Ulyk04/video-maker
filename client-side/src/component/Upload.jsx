import { Button, Card, CardContent, Input } from '@mui/material'
import React from 'react'


const Upload = ({ videoTitle, setVideoTitle, onUploadComplete }) => {
    const fileInputRef = React.useRef(null);

    const handleNextClick = async () => {
        const file = fileInputRef.current.files[0];
        if (videoTitle && file) {
            const formData = new FormData();
            formData.append('video', file);
            formData.append('title', videoTitle);

            try {
                const response = await fetch('http://localhost:5000/upload', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Upload successful:', data);
                   
                    onUploadComplete(videoTitle, data.filePath); 
                } else {
                    alert(`Upload failed: ${data.message || response.statusText}`);
                }
            } catch (error) {
                console.error('Error uploading video:', error);
                alert('An error occurred during upload.');
            }
        } else {
            alert('Please enter a video title and select a video file.');
        }
    };

    return (
        <div>
            <Card>
                <CardContent>
                    <label style={{ fontSize: '150%' }} >Upload Video file</label> <br /> <br />
                    <Input
                        type='file'
                        accept="video/*"
                        sx={{ width: '100%' }}
                        inputRef={fileInputRef}
                    />  <br /> <br />
                    <Input
                        placeholder="Video Title"
                        sx={{ width: '100%' }}
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                    /> <br /> <br />
                    <Button onClick={handleNextClick} variant='contained' >Next: Edit</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Upload;