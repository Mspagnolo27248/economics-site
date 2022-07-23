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

   const data =   GetTestData('cpi.json');
   console.log(data)
   res.send( data)
  }

  