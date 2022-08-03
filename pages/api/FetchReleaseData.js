import React from 'react'
import { FetchReleaseData } from '../../Utilities/fetch-fred'

// Works but is GET only cpi is the same example with POST
export default function handler(req, res) {
   FetchReleaseData()
    .then((data)=>res.send(data));
  ;
}
    

