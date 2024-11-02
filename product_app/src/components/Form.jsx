import { Button, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div class='form' >
        {/* <br /><br /><br /> */}
        <h1>Adding</h1>
        <TextField label='Product Name' variant='outlined'></TextField> <br /><br />
        <TextField label='Prize' variant='outlined'></TextField><br /><br />
        <TextField label='Category' variant='outlined'></TextField><br /><br />
        Description: <br /><TextareaAutosize label='category'></TextareaAutosize> <br /><br />
        <Button  color='inherit' variant='contained'>Add</Button>
    </div>
  )
}

export default Form