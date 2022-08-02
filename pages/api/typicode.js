


export default function handler(req,res){
const getData = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/albums');
const json = await data.json()
return json
}
    getData()
    .then((data)=>
    res.status(200).json(data)
    // res.send(data)
    )
   
}