import React from 'react'

export default function ReleaseDates(props) {





  return (
    <div>dates
    {JSON.stringify(props.data)}
    </div>
  )
}



export async function getStaticProps(){

const getFredSync = async (series_id)=>{

const  FutureReleaseDate = []
const fredUrl = `https://api.stlouisfed.org/fred/release/dates?release_id=${series_id}&`+
"include_release_dates_with_no_data=true&sort_order=desc&limit"+
"=4&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json"
const data = await fetch(fredUrl);
const json = await data.json();
 const obj = {}
 obj[series_id]= json.release_dates.map((item)=>item.date)
FutureReleaseDate.push(obj)
console.log(FutureReleaseDate)
return FutureReleaseDate
}


const data = []
 return getFredSync(52)
.then((output)=> {return{
    props:{
        data:output
    }
}});
   



   
}
   
