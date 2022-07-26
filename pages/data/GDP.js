import React, { Fragment, useEffect,useState } from 'react'
import LineChart from '../../components/chart/LineChart'
import {GetTestData} from '../../Utilities/fs_wrapper'
import {SetChartOptions} from '../../Utilities/chart-js-wrapper'
import { SetChartData } from '../../Utilities/chart-js-wrapper'



export default function GdpPage(props) {

const GDPChartOptions = SetChartOptions('Real GDP')
const GDPChartData =  SetChartData(
  props.GDP.observations.map((item)=>item.value),
  props.GDP.observations.map((item)=>item.date),
    '$'
    );


const IndustrialProductionChartOptions = SetChartOptions('Industrial Production')
const IndustrialProductionChartData = SetChartData(
 props.IndustrialProduction.observations.map((item)=>item.value),
 props.IndustrialProduction.observations.map((item)=>item.date) ,
 "$"  
);


const RetailSalesChartOptions = SetChartOptions('Retail Sales')
const RetailSalesChartData = SetChartData(
  props.RetailSales.observations.map((item)=>item.value),
  props.RetailSales.observations.map((item)=>item.date) ,
  "$"  
 );


const DurableGoodsChartOptions = SetChartOptions('Durable Goods Sales')
const DurableGoodsChartData = SetChartData(
  props.DurableGoods.observations.map((item)=>item.value),
  props.DurableGoods.observations.map((item)=>item.date) ,
  "$"  
 );



  return (
    <Fragment>
    <div>    
    <LineChart chartData={GDPChartData} chartOptions={GDPChartOptions}/>  
    <LineChart chartData={IndustrialProductionChartData} chartOptions={IndustrialProductionChartOptions}/>
    </div>

    <div>    
    <LineChart chartData={RetailSalesChartData} chartOptions={RetailSalesChartOptions}/>  
    <LineChart chartData={DurableGoodsChartData} chartOptions={DurableGoodsChartOptions}/>
    </div>

  
 
    </Fragment>
  )
}

export async function getStaticProps(){
 
    const GDP = GetTestData('GDP.json');
    const  IndustrialProduction = GetTestData('IndustrialProduction.json');
    const AdvancedRetailSales = GetTestData('AdvancedRetailSales.json')
    const RetailSales = GetTestData('RetailSales.json')
    const DurableGoods = GetTestData('durableGoods.json')

        return{
            props:{
                GDP:GDP,
                IndustrialProduction:IndustrialProduction,
                AdvancedRetailSales:AdvancedRetailSales,
                RetailSales:RetailSales,
                DurableGoods:DurableGoods,              

            }
        }
}




