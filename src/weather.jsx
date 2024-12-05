import React, { useState } from 'react'

import Searchbox  from './searchbox'
import Showbox  from './showbox'
export default function weather(){
  // console.log("weather")
  const [dtl,setDtl]=useState({});
    function detail(dtl){
      // console.log(dtl);
      setDtl({
        name:`${dtl.data.name}`,
        lat:`${dtl.data.coord.lat}`,
        lon:`${dtl.data.coord.lon}`,
        feels_like:`${dtl.data.main.feels_like}`,
        min:`${dtl.data.main.min}`,
        max:`${dtl.data.main.max}`,
        humidity:`${dtl.data.main.humidity}`,
        })
    }
    // console.log(dtl);
  return (<>
    <Searchbox detail={detail}/>
    <Showbox info={dtl}/>
    </>
  )
}
