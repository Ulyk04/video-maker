import React from 'react'
import { Card, CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { CheckCircle } from '@mui/icons-material'

const Export = () => {
  return (
    <div>
      <Card>
            <CardContent className="p-4 space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-green-600 flex justify-center"
              >
                <CheckCircle/>
              </motion.div>
              <h2 className="text-xl font-semibold">Ready to Export!</h2>
              <p className="text-sm text-gray-500">Your video "{videoTitle || "Untitled"}" is ready.</p>
              <Button variant="outline">Download Video</Button>
            </CardContent>
          </Card>
    </div>
  )
}

export default Export