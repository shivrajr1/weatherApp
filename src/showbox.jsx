import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './showbox.css'
import '@fontsource/roboto/500.css';

export default function showbox({info}){
  const rany="https://static.vecteezy.com/system/resources/thumbnails/026/788/692/small/clouds-with-rain-rainy-day-on-blue-background-free-video.jpg"
  const summer='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKmIiRfJPRcmEQd9j7RQsyUZ-W-oEXhGgBg&s';
  const winter='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchm5Suuc-xzL_x48SKeggzthqBKb3XGTbRg&s';

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
