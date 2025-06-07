import { Card, CardContent , Button } from '@mui/material'
import React from 'react'

const Edit = () => {

  const [step, setStep] = React.useState("edit");
  return (
    <div>
      <Card>
        <CardContent>
          <p style={{fontSize: '150%'}}>Basic editing options would go here. Add text, trim, music, etc.</p>
          <Button onClick={() => setStep("export")} variant = 'contained' >Next: Export</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Edit