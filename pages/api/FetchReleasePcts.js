import React from 'react'
import { FetchReleaseData } from '../../Utilities/fetch-fred'
import { MonthOverMonthPercentMonthly, YearOverYearPercentMonthly } from '../../Utilities/tends-js';

// Works but is GET only cpi is the same example with POST
export default function handler(req, res) {

    const data = {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "observation_start": "2019-07-01",
        "observation_end": "2022-07-22",
        "units": "lin",
        "output_type": 1,
        "file_type": "json",
        "order_by": "observation_date",
        "sort_order": "asc",
        "count": 36,
        "offset": 0,
        "limit": 100000,
        "observations": [
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2019-07-01",
        "value": "263.491"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2019-08-01",
        "value": "264.135"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2019-09-01",
        "value": "264.588"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2019-10-01",
        "value": "265.019"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2019-11-01",
        "value": "265.461"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2019-12-01",
        "value": "265.742"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-01-01",
        "value": "266.418"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-02-01",
        "value": "267.083"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-03-01",
        "value": "266.916"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-04-01",
        "value": "265.771"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-05-01",
        "value": "265.606"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-06-01",
        "value": "266.088"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-07-01",
        "value": "267.552"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-08-01",
        "value": "268.662"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-09-01",
        "value": "269.152"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-10-01",
        "value": "269.332"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-11-01",
        "value": "269.816"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2020-12-01",
        "value": "269.984"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-01-01",
        "value": "270.114"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-02-01",
        "value": "270.522"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-03-01",
        "value": "271.347"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-04-01",
        "value": "273.669"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-05-01",
        "value": "275.715"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-06-01",
        "value": "277.922"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-07-01",
        "value": "278.794"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-08-01",
        "value": "279.306"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-09-01",
        "value": "280.017"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-10-01",
        "value": "281.705"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-11-01",
        "value": "283.179"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2021-12-01",
        "value": "284.770"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2022-01-01",
        "value": "286.431"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2022-02-01",
        "value": "287.878"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2022-03-01",
        "value": "288.811"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2022-04-01",
        "value": "290.455"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2022-05-01",
        "value": "292.289"
        },
        {
        "realtime_start": "2022-07-25",
        "realtime_end": "2022-07-25",
        "date": "2022-06-01",
        "value": "294.354"
        }
        ]
        }
        
//    FetchReleaseData("")
//     .then((data)=> YearOverYearPercentMonthly(data))
//     .then((pct)=>res.send(data));
        // const pctChange = YearOverYearPercentMonthly(data)
       const pctChange =  MonthOverMonthPercentMonthly(data)
        res.send(pctChange)

  ;
}