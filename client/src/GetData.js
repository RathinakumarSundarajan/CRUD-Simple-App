import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


const GetData = () => {
    const [gotting,setGotting]=useState([])   //-----for GETing Data it should be SQUERE BRACKET within Bracket----------

    const getData = async ()=>{
        const res = await axios.get("http://localhost:8081/getting"); 
        setGotting(res.data)
        console.log(res.data);
      }
      useEffect(()=>{
        getData();
      },[]);
//---------------------can use anything in key={data.id/xyz/abcd} BUT to display it should be MATCHED with DB COLUMN NAMES------------
// ---------------------------------------------------------------Delete Data--------------------------------------------------------------
const deleteData = async (id) => {
  try {
    await axios.delete('http://localhost:8081/erasing/'+id);
    alert("data Deleted Successfully")
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};


  return (
    <div>
        <h1>gettin data</h1>  
        <div>
           
      
    {gotting.map((data)=>(
        <div key={data.id} className='home'>
        <tr>
        <td>{data.sid}</td> 
        <td>{data.names}</td>     
        <td>{data.emails}</td>
        <td><button className='button'><Link to={`/Update/${data.sid}`}>Update</Link></button></td> 
        <td><button className='button' onClick={()=>deleteData(data.sid)}>Delete</button></td> 

        

        </tr>
        </div>
       ))} 
    </div>    
    </div>
    
  )
}

export default GetData
