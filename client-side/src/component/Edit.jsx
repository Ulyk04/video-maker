import { Card, CardContent, Button } from '@mui/material';
import React from 'react';
import VideoEditor from './VideoEditor';


const Edit = ({ videoTitle, uploadedVideoFile, onEditComplete }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [finalEditedVideoUrl, setFinalEditedVideoUrl] = React.useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdits = (editedVideoUrl) => {
    console.log('Edits applied. Edited video URL:', editedVideoUrl);
    setFinalEditedVideoUrl(editedVideoUrl);
    setIsEditing(false);
    onEditComplete(editedVideoUrl); 
  };

  const handleCancelEdits = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <VideoEditor
        videoTitle={videoTitle}
        onSave={handleSaveEdits}
        onCancel={handleCancelEdits}
        uploadedVideoPath={uploadedVideoFile}
      />
    );
  }

  return (
    <div>
      <Card>
        <CardContent>
          <p style={{ fontSize: '150%' }}>Click "Edit" to customize your video.</p>

          {finalEditedVideoUrl && (
            <div>
              <p>Video has been edited and processed on the server.</p>
              <video src={finalEditedVideoUrl} controls style={{ maxWidth: '100%' }} />
            </div>
          )}
          <Button variant='contained' onClick={handleEditClick}>Edit</Button>
          <br /> <br />
         
          <Button onClick={() => onEditComplete(finalEditedVideoUrl)} variant='contained'>Next: Export</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Edit;