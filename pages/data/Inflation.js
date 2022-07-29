import React, { Fragment, useEffect,useState } from 'react'
import LineChart from '../../components/chart/LineChart'
import {GetTestData} from '../../Utilities/fs_wrapper'
import {SetChartOptions} from '../../Utilities/chart-js-wrapper'
import { SetChartData } from '../../Utilities/chart-js-wrapper'
import { FetchReleaseData, FetchSeriesObservationData } from '../../Utilities/fetch-fred'



export default function InflationPage(props) {

const cpiMomChartData =  SetChartData(
  props.cpiMom.observations.map((item)=>item.value),
  props.cpiMom.observations.map((item)=>item.date),
    '%'
    )

const cpiMomChartOptions = SetChartOptions('Month Over Month CPI Rate')


const cpiYoyChartData =  SetChartData(
    props.cpiYoy.observations.map((item)=>item.value),
    props.cpiYoy.observations.map((item)=>item.date),
      '%'
      )
  
  const cpiYoyChartOptions = SetChartOptions('Month Over Same Month Last Year CPI Rate')

const coreCpiIndexChartOptions = SetChartOptions('Core CPI Index')
const coreCpiIndexData = SetChartData(
    props.coreCpiIndex.observations.map((item)=>item.value),
    props.coreCpiIndex.observations.map((item)=>item.date),
      '%'
      )

const headCpiIndexChartOptions = SetChartOptions(' CPI Index')
const headCpiIndexData = SetChartData(
    props.headCpiIndex.observations.map((item)=>item.value),
    props.headCpiIndex.observations.map((item)=>item.date),
      '%'
      )





  return (
    <Fragment>
    <div>    
    <LineChart chartData={cpiMomChartData} chartOptions={cpiMomChartOptions}/>  
    <LineChart chartData={cpiYoyChartData} chartOptions={cpiYoyChartOptions}/>
    </div>

    <div>    
    <LineChart chartData={headCpiIndexData} chartOptions={headCpiIndexChartOptions}/> 
    <LineChart chartData={coreCpiIndexData} chartOptions={coreCpiIndexChartOptions}/>
    </div>
 
    </Fragment>
  )
}

export async function getStaticProps(){
    const fredCodes = GetTestData('FRED-series.json');
    const now = new Date().toISOString().substring(0,10);
    const start_date = '2015-10-01';
    const end_date =  now.toString();
    
    const cpiMom =  await FetchSeriesObservationData(fredCodes.CpiChgPrevPeriord,start_date,end_date);
    const cpiYoy =  await FetchSeriesObservationData(fredCodes.CpiPrevYear,start_date,end_date);
    const coreCpiIndex = await FetchSeriesObservationData(fredCodes.coreCpiIndex,start_date,end_date)
    const headCpiIndex = await FetchSeriesObservationData(fredCodes.headCPIIndex,start_date,end_date)

        return{
            props:{
                cpiMom :cpiMom,
                cpiYoy:cpiYoy,
                coreCpiIndex:coreCpiIndex,
                headCpiIndex:headCpiIndex,
               

            }
        }

    }



