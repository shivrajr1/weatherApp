import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './showbox.css'

export default function showbox({info}){
    const rany="../src/imgs/rany.jpg"
    const summer='./src/imgs/summer.jpg';
    const winter='./src/imgs/winter.jpg';
    const dusty='./src/imgs/dusty.jpg';
  return (
    <div className="show">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140,width:345 }}
        image={info.humidity>=80?rany:info.feels_like>=24?summer:winter}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {info&&info.name ? info.name:"enter city name -"}
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }} component={"span"}>
          
          {info && info.lat?`latitude : ${info.lat}`:"latitude : 0"}
          <br />
          {info&&info.lon?`longitude : ${info.lon}`:"longitude : 0"}
          <br />
          {info&&info.feels_like?<p>temperature : {info.feels_like}&deg;C</p>:<p>temperature : 0&deg;C</p>}
          {/* <br /> */}
          {info&&info.humidity?`humidity : ${info.humidity}`:"humidity : 0"}
        </Typography>
      </CardContent>
    </Card></div>
  )
}
