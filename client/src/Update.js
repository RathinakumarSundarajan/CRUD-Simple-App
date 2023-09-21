import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {sid} = useParams();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    
//--------------------------------------------------------------------------UPDATION---------------------------------------------------------------------------
    useEffect(()=>{
    // const UpdateData = async() =>{
         axios.get("http://localhost:8081/gettingforedit/"+sid) //----------GETTING FOR UPDATE----------------------------------------
        .then(res => {
            setName(res.data[0].names);
            setEmail(res.data[0].emails);
        })
        .catch(err => console.log(err));
    // }
},[])

// setName(res.data[0].names);
// setEmail(res.data[0].emails);
    
const navigate = useNavigate();
    const updateData = () =>{
        axios.put("http://localhost:8081/updateddata/"+sid,{name,email}) //------PUT/POST UPDATED DATA----------------------------------------
        .then(res=>{
            if(res.data.xyz) {
              alert('Updated Succefully')
              navigate('/GetData')
            }else {
              alert('Not Updated')
            }          
        })
    }
// --------------------------------------------------------------------UPDATION------------------------------------------------------------------


  return (
    <div>
      <h1>Updations</h1>
     <div>
      <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} name='name'/><br/>
      <input type='email' placeholder='e-mail' value={email} onChange={(e)=>setEmail(e.target.value)} name='email'/><br/>
      <button onClick={updateData}>Update</button>

      </div>
    </div>
  )
}

export default Update
