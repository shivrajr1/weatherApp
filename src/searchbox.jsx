import React from 'react'
import { useState } from 'react'
import { Button, TextField } from '@mui/material';
import axios from 'axios'
import './searchbox.css'

export default function searchbox({detail}){
  const [city, setCity] = useState('');
  const api = 'f5c1258f609da7b15987b0929b9fc347';
  
    // const [dtl, setDtl] = useState({});
    const [err, setErr] = useState('');
    
    // console.log(city);
    async function weather() {
      if(city){
        try{
      let info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
        detail(info);
      }catch(e){
           setErr("city not found");
        }
        setCity('');
      }else{
          setErr("Enter city name..");
        }
      
    }
  return (

    <>
    
    
      <div className="search">
        <TextField
        required 
        id="outlined-required" 
        label="City" 
        type="text" 
        name="city" 
        value={city} 
        onChange={(e) => { setCity(e.target.value) ;setErr('')}} 
        onKeyDown={(e) => {
          if (e.key === "Enter")
              weather();
          }}
         />
         {/* <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        /> */}
        <Button 
        variant="contained" 
        onClick={weather} 
        style={{ margin: "10px" }}
        >search</Button>
      </div>
      <div className="err1" 
      style={{
        fontSize:"30px",
        textAlign:"center",
        margin:"10px",
        color:"red",
        }}>{"err"&&err}</div>
    </>
  )
}
