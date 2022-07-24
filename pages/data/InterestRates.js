import React, { Fragment, useEffect,useState } from 'react'
import Table from '../../components/ui/table'
import { Line } from 'react-chartjs-2';
import {GetTestData} from '../../Utilities/fs_wrapper'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'


export default function InterestRatesPage(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

///----------------Ten Year
   const optionsTenYear = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: '10 Year Treasury',
      },
    },
  };

const chartDataTenYear = {
  labels: props.tenYear.observations.map((item)=>item.date),
  datasets: [{
    label: '%',
    borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    data: props.tenYear.observations.map((item)=>item.value),
  }]
}

//-------------------------Tens Minus Twos-------------------------
const optionsTenMinusTwos = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: '10yr Minus 2yr Spreads',
      },
    },
  };

const chartDataTenMinusTwos = {
  labels: props.tensMinusTwos.observations.map((item)=>item.date),
  datasets: [{
    label: '%',
    borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    data: props.tensMinusTwos.observations.map((item)=>item.value),
  }]
}

//--------------------------BreakEven Rates (Inflation Expectations)------------------------
const optionsBreakevens = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: '10year Breakevens',
      },
    },
  };

const chartDataBreakevens = {
  labels: props.breakevens.observations.map((item)=>item.date),
  datasets: [{
    label: '%',
    borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    data: props.breakevens.observations.map((item)=>item.value),
  }]
}

//--------------------------------------------------
const optionsFedFunds = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: ' Fed Funds Upper Target Rate',
      },
    },
  };

const chartDataFedFunds = {
  labels: props.fedFundsTarget.observations.map((item)=>item.date),
  datasets: [
  
    {
        label: '%',
        borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: props.fedFundsTarget.observations.map((item)=>item.value),
        }

]
}


  return (
    <Fragment>
    <div>
    <div className='chart-container'>
      <Line  data={chartDataTenYear}  options={optionsTenYear} />
      </div>

      <div className='chart-container'>
      <Line  data={chartDataTenMinusTwos}  options={optionsTenMinusTwos} />
      </div>

    </div>

    <div>
    <div className='chart-container'>
      <Line  data={chartDataBreakevens}  options={optionsBreakevens} />
      </div>

      <div className='chart-container'>
      <Line  data={chartDataFedFunds}  options={optionsFedFunds} />
      </div>

    </div>
   
     
    </Fragment>
  )
}

export async function getStaticProps(){
 
    const tenYear = GetTestData('10year.json')
    const tensMinusTwos = GetTestData('10yrMinus2yr.json')
    const fedFunds = GetTestData('FEDFUNDS.json')
    const breakevens = GetTestData('TenYearBreakEven.json')
    const fedFundsTarget = GetTestData('FedFundsUpperTarget.json')

        return{
            props:{
                tenYear:tenYear,
                tensMinusTwos:tensMinusTwos,
                fedFundsTarget:fedFundsTarget,
                fedFunds:fedFunds,
                breakevens:breakevens,

            }
        }
}




