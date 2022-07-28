import React, { Fragment } from 'react'
import classes from './releases.module.css'
import { GetTestData } from '../../Utilities/fs_wrapper'




export default function ReleasePage
(props) {





  return (
  <Fragment>
    <div>
        <h1>Economic Release Data</h1>
        <h2>{new Date().toLocaleDateString()}</h2>
    </div>

    <div className={classes.gridContainer}>
    <div className={`${classes.gridItem} ${classes.gridItem1} `} > Release Name </div>
        <div className={classes.gridItem}> Current Release </div>
        <div className={classes.gridItem} > Prior Release </div>
        <div className={classes.gridItem}>  Two Back Release  </div>
    {props.testData.map((item)=>{
        return (
       <Fragment >

       <div className={`${classes.gridItem} ${classes.gridItem1} `} > {item.serries_id} </div>
        <div className={classes.gridItem}> {item.current}  </div>
        <div className={classes.gridItem} > {item.prior}  </div>
        <div className={classes.gridItem}>  {item.twoback}   </div>
       </Fragment>
       
 
        )
    })}
    </div>


  </Fragment>
  )
}


export async function getStaticProps(){
 
    const testData = GetTestData('releaseTestData.json');
   
        return{
            props:{
                testData:testData,
             

            }
        }
}