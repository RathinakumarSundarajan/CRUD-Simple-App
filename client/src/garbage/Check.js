import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Check = () => {
    

    const [checkname, setCheckname] = useState('')
    const [checkemail, setCheckemail] = useState('')

    const[valid,setValid] = useState('')

    // useEffect(()=>{
        const CheckData = () =>{
             axios.post("http://localhost:8081/checking",{checkname,checkemail}) //----------GETTING FOR CHECKING----------------------------------------
             .then(res => {
                if(res.data.message){
                  setValid(res.data.message);
                  setValid(res.data.message);
                }else{
                  setValid(res.data[0].names);
                  setValid(res.data[0].emails);           
                }                
               })
               .catch(err => console.log(err));
        }
    // },[])


  return (
    <div>
        <h1>Validation</h1>
     <div>
      <input type='text' placeholder='name' onChange={(e)=>setCheckname(e.target.value)} name='name'/><br/>
      <input type='email' placeholder='e-mail' onChange={(e)=>setCheckemail(e.target.value)} name='email'/><br/>
      <button onClick={CheckData}>Submit</button>
      </div>
      <h1>{valid}</h1>
      
    </div>
  )
}

export default Check
