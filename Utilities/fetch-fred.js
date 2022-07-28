export async function  FetchReleaseData(
    series_id ='MORTGAGE30US',
    observation_start='2019-07-01',
    observation_end = '2022-07-01'
){

const data = await fetch(`https://api.stlouisfed.org/fred/series/observations?series_id=${series_id}`+
                            `&${observation_start}=2019-07-01&${observation_end}=2022-07-22&`+
                            `api_key=3930e57c78d990d30f7d376f5c406e2e&file_type=json`)
const jsonObj = await data.json();
return jsonObj
 

}

