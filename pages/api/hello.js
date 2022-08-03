// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import {FetchReleaseData} from '../../Utilities/fetch-fred'
import fs from 'fs';
import path from 'path'

export default function handler(req, res) {

  FetchReleaseData('GDPC1')
  .then((data)=>  JSON.stringify(data))
  .then( (json)=>{
     let testDataPath = path.join(process.cwd(),'Database/')
  
    fs.writeFile(testDataPath+'series.json', json
    ,(err)=>{if(err){
      console.log(err)
      return res.status(500).json({Sucess:"false"})
    }
      else{
        console.log('Success')
      return   res.status(200).json({Sucess:"true"})
      }
    
    }
    )})
    
  } 
  
  
  
 
 

