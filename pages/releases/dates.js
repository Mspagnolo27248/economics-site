import React from 'react'
import { FetchReleaseCodes } from '../../Utilities/fetch-fred'
import { GetTestData } from '../../Utilities/fs_wrapper'

export default function ReleaseDates(props) {





  return (
    <div>dates
    {JSON.stringify(props.data)}
    </div>
  )
}



export async function getStaticProps(){
  const fredCodes = GetTestData('FRED-series.json');
const seriesList = await FetchReleaseCodes(Object.values(fredCodes))

const getFredSync = async (series_ids)=>{
    const  FutureReleaseDate = []

    for(const series in series_ids){
      const releaseid = series_ids[series].releases[0].id
      const fredUrl = `https://api.stlouisfed.org/fred/release/dates?release_id=${releaseid}&`+
      "include_release_dates_with_no_data=true&sort_order=desc&limit"+
      "=4&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json"
      const data = await fetch(fredUrl);
      const json = await data.json();
      if(json){
        const obj = {}
        obj[releaseid]= await json.release_dates.map((item)=>item.date)
        FutureReleaseDate.push(obj)
      }
    
    }

    console.log(FutureReleaseDate)
    return FutureReleaseDate
}


const data =  getFredSync(seriesList)
.then((output)=> {return{
    props:{
        data:output
    }
}});

return data
   



   
}
   
