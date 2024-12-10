import React from 'react'
import { useState } from 'react'
import { Button, TextField } from '@mui/material';
import axios from 'axios'
import './searchbox.css'

export default function searchbox({detail}){
  const [city, setCity] = useState('');
  
  
    // const [dtl, setDtl] = useState({});
    const [err, setErr] = useState('');
    const [validationError, setValidationError] = useState(false);
    // console.log(city);
    async function weather() {
      
      if(city){
      
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api}&units=metric`)
      .then((res)=>{
        detail(res);
        // console.log(res);
      })
        
        // console.log(info);
      .catch((err)=>{
        //  console.log(err);
         setErr(err.response.data.message);
          
        })
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
        onChange={(e) => {
           setCity(e.target.value) ;
           if (e.target.validity.valid) {
            setValidationError(false);
          } else {
            setValidationError(true);
          }
          
           setErr('')}} 
           error={validationError}
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
