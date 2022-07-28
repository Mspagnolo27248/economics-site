import React from 'react'
import { FetchReleaseData } from '../../Utilities/fetch-fred'


export default function handler(req, res) {
   FetchReleaseData()
    .then((data)=>res.send(data));
  ;
}
    

