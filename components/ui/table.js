import React from 'react'
import classes from './table.module.css'
export default function Table(props) {
    if(!props.data)
    {return <p>Loading ...</p>}
  return (
    <div>
    <table>
    <tbody>
    <tr>
    <th>Date</th>
    <th>Price</th>
    <th>Change</th>
    </tr>
    {props.data.map((item)=> 
    <tr>
    <td>{item.date}</td>
    <td>{item.value}</td>
    
    </tr>
    )}
    </tbody>
   
    </table>
        
    
    </div>
  
   
  

 
  )
}
