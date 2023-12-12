import React, { useEffect, useState } from 'react';
import sayhello from './api/sayhello';
import Card from './components/Card';
function App(){
  const[data,setdata]=useState(null);
  useEffect(()=>{
    sayhello()
    .then((val)=>{
      setdata(val);
    })
  },[])
  return(
    <div>
      {data?data.map((val)=>(
        <Card key={val.id} id={val.id} title={val.title}/>
      )):<p>nodata</p>}
    </div>
  )
}
export default App;