import fs from 'fs'
import path from 'path'

const GetTestData=  (file) =>{

    const testDataPath = path.join(process.cwd(),'Test',file)
    const  jsonData =  fs.readFileSync(testDataPath)
    const data = JSON.parse(jsonData)
    console.log(testDataPath)
    return data
}
export default function handler(req, res) {

if(req.method==='POST'){
    const file = req.body.file
   // const testDataPath = path.join(process.cwd(),'Test/')
   const data =   GetTestData(file);
   console.log(data)
   res.send( data)
  }
  else{
    const file = req.query.file
    //const testDataPath = path.join(process.cwd(),'Test/')
   const data =   GetTestData(file);
   console.log(data)
   res.send( data)
  }
}



  