import React, { Fragment, useEffect,useState } from 'react'
import LineChart from '../../components/chart/LineChart'
import {GetTestData} from '../../Utilities/fs_wrapper'
import {SetChartOptions} from '../../Utilities/chart-js-wrapper'
import { SetChartData } from '../../Utilities/chart-js-wrapper'



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
 
    const cpiMom = GetTestData('CPI-percent-mom.json');
    const cpiYoy = GetTestData('CPI-percent-prev-year.json');
    const coreCpiIndex = GetTestData('coreCpiIndex.json')
    const headCpiIndex = GetTestData('headCpiIndex.json')

        return{
            props:{
                cpiMom :cpiMom,
                cpiYoy:cpiYoy,
                coreCpiIndex:coreCpiIndex,
                headCpiIndex:headCpiIndex,
               

            }
        }

    }



