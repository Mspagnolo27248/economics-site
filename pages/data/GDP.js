import React, { Fragment, useEffect,useState } from 'react'
import LineChart from '../../components/chart/LineChart'
import {GetTestData} from '../../Utilities/fs_wrapper'
import {SetChartOptions} from '../../Utilities/chart-js-wrapper'
import { SetChartData } from '../../Utilities/chart-js-wrapper'



export default function GdpPage(props) {

const GDPChartData =  SetChartData(
  props.GDP.observations.map((item)=>item.value),
  props.GDP.observations.map((item)=>item.date),
    '$'
    );

const GDPChartOptions = SetChartOptions('Real GDP')

const IndustrialProductionChartData = SetChartData(
 props.IndustrialProduction.observations.map((item)=>item.value),
 props.IndustrialProduction.observations.map((item)=>item.date) ,
 "$"  
);

const IndustrialProductionChartOptions = SetChartOptions('Industrial Production')







  return (
    <Fragment>
    <div>    
    <LineChart chartData={GDPChartData} chartOptions={GDPChartOptions}/>  
    <LineChart chartData={IndustrialProductionChartData} chartOptions={IndustrialProductionChartOptions}/>
    </div>

  
 
    </Fragment>
  )
}

export async function getStaticProps(){
 
    const GDP = GetTestData('GDP.json');
    const  IndustrialProduction = GetTestData('IndustrialProduction.json');
    const AdvancedRetailSales = GetTestData('AdvancedRetailSales.json')

        return{
            props:{
                GDP:GDP,
                IndustrialProduction:IndustrialProduction,
                AdvancedRetailSales:AdvancedRetailSales,
               

            }
        }
}




