import React, { useState } from 'react'

export default function index() {
    const [data,setData] = useState();
   fetch('https://api.stlouisfed.org/fred/series/observations?series_id=T10Y2Y&observation_start=2019-07-01&observation_end=2022-07-22&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json')
   .then((response)=> response.json())
   .then((resData)=> setData(resData))


   if(!data){
    return <div>...Loading</div>
   }
  return (
    <div>
            {data.map((item)=><h1>{item.title}</h1>)}

    </div>
  )
}
