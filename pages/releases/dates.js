import React from 'react'
import { GetTestData } from '../../Utilities/fs_wrapper';
import { FetchReleaseCodes } from '../../Utilities/fetch-fred'

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
    const releaseData = []
    for(const series in series_ids){
      const serName = series_ids[series].releases[0].name
      const releaseid = series_ids[series].releases[0].id
      releaseData.push({seriesName:serName,seriesId:series,releaseId:releaseid, })
      const fredUrl = `https://api.stlouisfed.org/fred/release/dates?release_id=${releaseid}&`+
      "include_release_dates_with_no_data=true&sort_order=desc&limit"+
      "=4&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json"
      const data = await fetch(fredUrl);
      const jsonData = await data.json();
      const obj = {}
      obj[releaseid]=  await jsonData.release_dates.map((item)=>item.date)
      FutureReleaseDate.push(obj)
      }
      console.log(JSON.stringify(releaseData))
      return releaseData
      }


const data =  getFredSync(seriesList)
.then((output)=> {return{
    props:{
        data:output
    }
}});

return data
   



   
}
   
