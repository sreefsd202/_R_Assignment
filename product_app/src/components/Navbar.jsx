import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
     background: 'rgb(207,127,223)',
    background: 'linear-gradient(0deg, rgba(207,127,223,1) 0%, rgba(231,208,233,1) 100%)'
       }}>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>Luxe Attire</Typography>
                <Link to='/h'>
                <Button color='inherit' > Home</Button></Link>
                
                &nbsp; &nbsp;
                <Link to='/a'>
                <Button color='inherit' >Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar