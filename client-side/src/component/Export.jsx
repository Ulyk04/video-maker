import React from 'react'
import { Card, CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { CheckCircle } from '@mui/icons-material'

const Export = () => {

  const [videoTitle, setVideoTitle] = React.useState('')
  return (
    <div>
      <Card>
            <CardContent style={{textAlign: 'center'}}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-600 flex justify-center"
              >
                <CheckCircle sx={{width: 100, height: 100 , mr: 2}} />
              </motion.div>
              <h2 className="text-xl font-semibold">Ready to Export!</h2>
              <p className="text-sm text-gray-500">Your video "{videoTitle || "Untitled"}" is ready.</p>
              <Button variant="contained">Download Video</Button>
            </CardContent>
          </Card>
    </div>
  )
}

export default Export