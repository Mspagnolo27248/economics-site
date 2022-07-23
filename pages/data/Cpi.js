import React, { Fragment, useEffect,useState } from 'react'
import Table from '../../components/ui/table'
import { Line } from 'react-chartjs-2';

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: '30 Year Mortgage Rate',
    },
  },
};

export default function CpiPage() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
const [dataCpi,setData] = useState([{date:"mike",value:10}]);

const labels = dataCpi.map((item)=>item.date);
const chartData = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    data: dataCpi.map((item)=>item.value),
  }]
}
useEffect(()=>{
//https://api.stlouisfed.org/fred/series/observations?series_id=MORTGAGE30US&realtime_start=2022-01-22&realtime_end=2022-07-22&api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json
fetch('/api/cpi')
.then(response => response.json())
.then(data => {
 console.log(data.observations)
 setData(data.observations)
}
)   
},[])

  



  return (
    <Fragment>
      <div className='chart-container'>
      <Line  data={chartData}  options={options} />
      </div>

      <div className='chart-container'>
      <Line  data={chartData}  options={options} />
      </div>

      <div className=''>
      <Table data = {dataCpi}/>
      </div>
      <div className=''>
      <Table data = {dataCpi}/>
      </div>
     
    </Fragment>
  )
}
