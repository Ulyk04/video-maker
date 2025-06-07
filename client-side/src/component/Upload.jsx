import { Card, CardContent, Input } from '@mui/material'
import React from 'react'

const Upload = () => {

    const [videoTitle, setVideoTitle] = React.useState('');

  return (
    <div>
        <Card>
            <CardContent>
                <label style={{fontSize: '150%'}} >Upload Video file</label> <br /> <br />
                <Input type='file' accept="video/*" sx={{width: '100%'}} ></Input>  <br /> <br />
                <Input 
                    placeholder="Video Title"
                    sx={{width: '100%'}}
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                />
            </CardContent>
        </Card>
    </div>
  )
}

export default Upload