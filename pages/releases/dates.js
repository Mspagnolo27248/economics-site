import React, { Fragment } from 'react'
import { GetTestData } from '../../Utilities/fs_wrapper';
import { FetchReleaseCodes } from '../../Utilities/fetch-fred'

export default function ReleaseDates(props) {





  return (
    <Fragment>
      <div>
        <h1>Upcoming Economic Data Release Dates</h1>
      </div>

      {Object.values(props.FutureReleaseDate).map((item)=>{return <div key={props.FriendlyName[Object.keys(item)[0]]}>
      <div >
      <p>
      {props.FriendlyName[Object.keys(item)[0]]}
      </p>

    
      </div>
      <div >
      <p>
      {Object.values(item)[0].map((dates)=> {return <div key={props.FriendlyName[Object.keys(item)[0]]+dates}>{dates} </div>})}
      </p>
       
      </div>
     </div>
      }
      )
      }
    </Fragment>
  )
}



export async function getStaticProps(){
const seriesList = GetTestData('ReleaseCodes.json');
const  FutureReleaseDate = []
const FriendlyName = {}
seriesList.map((item) => {FriendlyName[item.seriesId]=item.seriesName})
const getFredSync = async (release_id)=>{   
      const fredUrl = `https://api.stlouisfed.org/fred/release/dates?release_id=${release_id}&`+
      "include_release_dates_with_no_data=true&sort_order=desc&limit"+
      "=5&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json"
      const data = await fetch(fredUrl);
      const jsonData = await data.json();
      return jsonData
      }

      for (const series of seriesList){
        const releaseDates = await getFredSync(series.releaseId);
        const obj = {}
        obj[series.seriesId]= releaseDates.release_dates.map((item)=>item.date)
        FutureReleaseDate.push(obj)
       
   
      }
   


      return  {props:{
        FutureReleaseDate:FutureReleaseDate,
        FriendlyName:FriendlyName,
      }
      }
      }





   



   

