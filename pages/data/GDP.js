import React, { Fragment, useEffect,useState } from 'react'
import LineChart from '../../components/chart/LineChart'
import {SetChartOptions} from '../../Utilities/chart-js-wrapper'
import { SetChartData } from '../../Utilities/chart-js-wrapper'
import { FetchSeriesObservationData } from '../../Utilities/fetch-fred'
import { GetTestData } from '../../Utilities/fs_wrapper'



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
    const fredCodes = GetTestData('FRED-series.json');
    // TODO - try promise.all()
     
      const start_date = '2018-10-01';
      const end_date = '2022-07-01';
      const GDP = await FetchSeriesObservationData(fredCodes.GDP,start_date,end_date);
      const  IndustrialProduction =  await FetchSeriesObservationData('INDPRO',start_date,end_date);
      const AdvancedRetailSales = await FetchSeriesObservationData('RSXFS',start_date,end_date);
      const RetailSales = await FetchSeriesObservationData('MRTSSM44X72USS',start_date,end_date);
      const DurableGoods =  await FetchSeriesObservationData('DGORDER',start_date,end_date);
      
      return {
        props:{
          GDP:GDP,
          IndustrialProduction:IndustrialProduction,
          AdvancedRetailSales:AdvancedRetailSales,
          RetailSales:RetailSales,
          DurableGoods:DurableGoods,          
        }
    }

   
    

      
}




