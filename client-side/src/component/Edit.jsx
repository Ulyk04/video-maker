import { Card, CardContent , Button } from '@mui/material'
import React from 'react'

const Edit = () => {
  const Edit = ({ videoTitle, setStep, uploadedVideoFile }) => { 
    const [isEditing, setIsEditing] = React.useState(false);
    const [finalEditedVideoUrl, setFinalEditedVideoUrl] = React.useState('');
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveEdits = (editedVideoUrl) => { 
      console.log('Edits applied. Edited video URL:', editedVideoUrl);
      setFinalEditedVideoUrl(editedVideoUrl);
      setIsEditing(false); 
      setStep("export"); 
    };
  
    // ...
  
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
          
            {finalEditedVideoUrl && (
              <div>
                <p>Video has been edited and processed on the server.</p>
                <video src={finalEditedVideoUrl} controls style={{ maxWidth: '100%' }} />
              </div>
            )}
            <Button variant='contained' onClick={handleEditClick}>Edit</Button>
            <br /> <br />
            <Button onClick={() => setStep("export")} variant='contained'>Next: Export</Button>
          </CardContent>
        </Card>
      </div>
    );
  };
}

export default Edit