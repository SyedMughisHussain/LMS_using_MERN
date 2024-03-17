import React from 'react'
import Alert from '@mui/material/Alert';

const AlertBox = (props) => {
  return (
    <Alert sx={{
        marginLeft: '800px'
    }} severity="success">{props.message}</Alert>
  )
}

export default AlertBox