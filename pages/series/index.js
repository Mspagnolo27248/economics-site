import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRef} from 'react';
import { useRouter } from 'next/router'

export default function SeriesPage() {


    const series_id = useRef();
    const observation_start = useRef();
    const observation_end = useRef();
    const router = useRouter(); 

    const submitHandler= (event)=>{
        event.preventDefault();
        const fullPath = `/series/${series_id.current.value}/${observation_start.current.value}/${observation_end.current.value}`
        router.push(fullPath)
        
    }
  return (
    <Fragment>
    <div>
        <form onSubmit={submitHandler}>
            <button> Get Data </button>
            <label htmlFor='series_id'>Economic Series</label>
            <select id='series_id' ref={series_id}>
                <option value='GDP'>GDP</option>
                <option value='RealGDP'> Real GDP</option>
            </select>
            <label htmlFor='observation_start'>Start Date</label>
            <input id ='observation_start' ref={observation_start}></input>


            <label htmlFor='observation_end' placeholder='yyyy-mm-dd'>End Date</label>
            <input id ='observation_end' ref={observation_end} placeholder='yyyy-mm-dd'></input>
        </form>
    </div>
    <Link href='./series/gdp'>GDP</Link>
    <Link href='./series/durable'>Durable Goods</Link>
    </Fragment>
  )
}
