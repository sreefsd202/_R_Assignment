import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

 


const Usertable = () => {
  var[user,setuser]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        setuser(response.data)
        console.log(user)
    })
  },[])
  return (
    <div>
        <br /><br /><br /><br />
        <Grid container spacing={2}>
            {user.map((val)=>{
              return(
                <Grid item xs={12} sm={6} md={4} >
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography>{val.title}</Typography>
        <Typography >Price:{val.price}</Typography>
        <Typography > {val.category}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        
      </CardActions>
    </Card>    
      </Grid>
              )
            })}

        </Grid>
    </div>
  )
}    

export default Usertable