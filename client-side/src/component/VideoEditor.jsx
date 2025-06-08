import React from 'react'

const VideoEditor = () => {
    const VideoEditor = ({ videoTitle, onSave, onCancel, uploadedVideoPath }) => { 
        
        const [editedVideoUrl, setEditedVideoUrl] = React.useState(''); 
      
        const handleSave = async () => {
          try {
            const response = await fetch('http://localhost:5000/edit-video', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                originalFilePath: uploadedVideoPath, 
                trimStart: parseFloat(trimStart) || 0,
                trimEnd: parseFloat(trimEnd) || undefined, 
                newTitle: currentVideoTitle,
                
              }),
            });
            const data = await response.json();
            if (response.ok) {
              console.log('Editing successful:', data);
              setEditedVideoUrl(data.editedVideoUrl); 
              onSave(data.editedVideoUrl); 
            } else {
              alert(`Editing failed: ${data.message || data.error || response.statusText}`);
            }
          } catch (error) {
            console.error('Error during video editing:', error);
            alert('An error occurred during video editing.');
          }
        };
      
        return (
          <Card>
            <CardContent>
             
              <Button variant="contained" color="primary" onClick={handleSave} style={{ marginRight: '10px' }}>
                Apply Edits (Server Processing)
              </Button>
              <Button variant="outlined" onClick={onCancel}>
                Cancel
              </Button>
      
              {editedVideoUrl && (
                <div>
                  <h3>Edited Video Preview:</h3>
                  <video src={editedVideoUrl} controls style={{ maxWidth: '100%' }} />
                  <p>Link: <a href={editedVideoUrl} target="_blank" rel="noopener noreferrer">{editedVideoUrl}</a></p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      };
}

export default VideoEditor