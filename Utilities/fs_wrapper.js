import fs from 'fs'
import path from 'path'



export const GetTestData=  (file) =>{

    const testDataPath = path.join(process.cwd(),'Test',file)
    const  jsonData =  fs.readFileSync(testDataPath)
    const data = JSON.parse(jsonData)
    console.log(testDataPath)
    return data
}