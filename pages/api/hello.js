// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import {FetchReleaseData} from '../../Utilities/fetch-fred'
import fs from 'fs';
import path from 'path'

export default function handler(req, res) {
  // const tagList = ['GDP','GDPC1']
  const seriesTags =  FetchReleaseData()
  
  
  
  let json = JSON.stringify(seriesTags);
  const testDataPath = path.join(process.cwd(),'Database')
  fs.writeFile('seriess.json', json);
}

