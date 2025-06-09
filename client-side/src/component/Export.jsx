// client-side/src/component/Export.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Export = ({ finalEditedVideoUrl }) => { // Можете принять URL, если он нужен для экспорта
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Export Your Video
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Your video is ready for export!
        </Typography>
        {finalEditedVideoUrl && (
          <div style={{ marginTop: '20px' }}>
            <Typography>Processed Video:</Typography>
            <video src={finalEditedVideoUrl} controls style={{ maxWidth: '100%' }} />
            <a href={finalEditedVideoUrl} download>Download Video</a>
          </div>
        )}
        <Typography sx={{ mt: 2 }}>
          (Implement actual export options here, e.g., different formats, cloud storage)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Export;