import { useRouter } from 'next/router'
import React from 'react'

export default function HistoricalSeriesDataPage() {
  
  const router = useRouter();
  const urlParams = router.query.slug;
    return (
        <div>
    <div>HistoricalSeriesDataPage</div>
    <div>{urlParams[0]}</div>
    <div>{urlParams[1]}</div>
    <div>{urlParams[2]}</div>
        </div>

  )
}
