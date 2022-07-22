import React, { Fragment, useEffect,useState } from 'react'
import Table from '../../components/ui/table'
export default function CpiPage() {

const [dataCpi,setData] = useState([{date:"mike",value:10}]);

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

        <Table data = {dataCpi}/>
    </Fragment>
  )
}
