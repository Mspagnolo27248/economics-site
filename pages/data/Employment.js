import React, { Fragment, useEffect,useState } from 'react'
import LineChart from '../../components/chart/LineChart'
import {GetTestData} from '../../Utilities/fs_wrapper'
import {SetChartOptions} from '../../Utilities/chart-js-wrapper'
import { SetChartData } from '../../Utilities/chart-js-wrapper'
import { LaborForce } from '../../Test/FredUrls'


export default function EmploymentPage(props) {

const UnemplymentChartData =  SetChartData(
  props.UnemploymentRate.observations.map((item)=>item.value),
  props.UnemploymentRate.observations.map((item)=>item.date),
    '%'
    )

const UnemploymentChartOptions = SetChartOptions('Unemployment Rate')

const LaborForceChartOptions = SetChartOptions('Labor Force Participation Rate')

const LaborForceChartData =  SetChartData(
    props.LaborForceParticipation.observations.map((item)=>item.value),
  props.LaborForceParticipation.observations.map((item)=>item.date),
    '%'
    )

    const EmploymentChartOptions = SetChartOptions('Employeed Workers')

    const EmploymentChartData =  SetChartData(
        props.Employment.observations.map((item)=>item.value),
      props.Employment.observations.map((item)=>item.date),
        'Workers'
        )

const TotalLaborForceChartOptions = SetChartOptions('Total Labor Force  (Workers)')

const TotalLaborForceChartData =  SetChartData(
    props.LaborForce.observations.map((item)=>item.value),
    props.LaborForce.observations.map((item)=>item.date),
    'Workers'
    )






  return (
    <Fragment>
    <div>    
    <LineChart chartData={UnemplymentChartData} chartOptions={UnemploymentChartOptions}/>  
    <LineChart chartData={LaborForceChartData} chartOptions={LaborForceChartOptions}/>
    </div>

    <div>    
    <LineChart chartData={EmploymentChartData} chartOptions={EmploymentChartOptions}/> 
    <LineChart chartData={TotalLaborForceChartData} chartOptions={TotalLaborForceChartOptions}/>
    </div>
 
    </Fragment>
  )
}

export async function getStaticProps(){
 
    const UnemploymentRate = GetTestData('UnemplymentRate.json');
    const LaborForceParticipation = GetTestData('LaborForceParticipation.json');
    const Employment = GetTestData('Employement.json');
    const LaborForce = GetTestData('LaborForce.json')
        return{
            props:{
                UnemploymentRate:UnemploymentRate,
                LaborForceParticipation:LaborForceParticipation,
                Employment:Employment,
                LaborForce:LaborForce,
               

            }
        }
}




