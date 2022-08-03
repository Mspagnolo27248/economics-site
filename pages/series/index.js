import React, { Fragment, useEffect, useState } from 'react'
import { useRef} from 'react';
import { FetchSeriesObservationData } from '../../Utilities/fetch-fred';
import { SetChartData, SetChartOptions } from '../../Utilities/chart-js-wrapper';
import LineChartLarge from '../../components/chart/LineChartLarge'
import { GetTestData } from '../../Utilities/fs_wrapper';


export default function SeriesPage(props) {

     //TODO- update function to change chart legend based on series UOM update axis labels

    const [currentChartOptions,setCurrentChartOptions] = useState(
        SetChartOptions(props.serries)
 );

    const [currentChartData,setCurrentChartData] = useState(
        (SetChartData(
            props.data.observations.map((item)=>item.value),
            props.data.observations.map((item)=>item.date),
            '$'
            )
    )
       
    );

const [currentData,setCurrentData] = useState(props.data)


    const series_id = useRef('GDP');
    const observation_start = useRef();
    const observation_end = useRef();
   const todaysDate = new Date().toISOString().split('T')[0]
useEffect(()=>{
    setCurrentChartData(
        SetChartData(
        currentData.observations.map((item)=>item.value),
        currentData.observations.map((item)=>item.date),
        '$'
        ));

        const selectedCurrentIndex = series_id.current.selectedIndex;
        const selectedOption = series_id.current.options[selectedCurrentIndex].text;
        const title = selectedOption+' - '+series_id.current.value

        setCurrentChartOptions(SetChartOptions(title))
},[currentData])

    const submitHandler= (event)=>{
        event.preventDefault();
        const seriesId = event.target.series_id.value;
        const observation_start = event.target.observation_start.value;
        const  observation_end = event.target.observation_end.value;

        fetch('/api/cpi',
        {method: 'POST', 
        body:JSON.stringify(
            {series:seriesId,
            observation_end:observation_end,
        observation_start:observation_start}

        )})
        .then((response)=> response.json())
        .then((data)=>{
          
            setCurrentData(data)
     
        })
       
       
        
    }
  return (
    <Fragment>
    <div>
        <form onSubmit={submitHandler}>
            <button> Get Data </button>
            <label htmlFor='series_id'>Economic Series</label>
            <select id='series_id' ref={series_id} defaultValue='GDP'>
         
               {Object.keys(props.fredItems).map((key,index)=>{
                if(key==='GDP'){
                    return <option key={index}   value={props.fredItems[key]}>{key}</option>
                }
                else{
                    return <option key={index} value={props.fredItems[key]}>{key}</option>
                }
               
               })}
            </select>
            <label htmlFor='observation_start'>Start Date</label>
            <input id ='observation_start' ref={observation_start} placeholder='yyyy-mm-dd'></input>


            <label htmlFor='observation_end' placeholder='yyyy-mm-dd'>End Date</label>
            <input id ='observation_end' ref={observation_end} placeholder='yyyy-mm-dd'defaultValue={todaysDate}></input>
        </form>
    </div>
 <LineChartLarge chartData={currentChartData} chartOptions={currentChartOptions}/>

    </Fragment>
  )
}


export async function getStaticProps(context){
    const serries = 'GDP'
    const data =  await FetchSeriesObservationData(serries);
    const fredItems = GetTestData('FRED-series.json')
    return {
        props:{data:data,
            serries:serries,
            fredItems:fredItems,
        }

    }
}