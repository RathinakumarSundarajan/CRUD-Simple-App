import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
import axios from 'axios'



const Post = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')

  const [checkname, setCheckname] = useState('')
  const [checkemail, setCheckemail] = useState('')

  const [validName, setValidName] = useState('')
  const [validEmail, setValidEmail] = useState('')


 
  const navigate=useNavigate();

  const postData = async()=>{
    await axios.post("http://localhost:8081/posting",{name,email}) //----Instead of "book_tb", we can use any name for this, but matched with Backend url name------------------------ 
    .then(function (response) {     
      console.log(response?.data);
      alert("New Contact Added Successfully!..");
      navigate('/GetData')
  })
  .catch(function (response) {   
      console.log(response) 
  });
  }

  const checkData = () =>{
    axios.post("http://localhost:8081/checking",{checkname,checkemail}) //----------GETTING FOR CHECKING----------------------------------------
   .then(res => {
    if(res.data.message){
      setValidName(res.data.message);
    }else{
      setValidName(res.data[0].names);
      // setValidEmail(res.data[0].emails);
    }    
   })
   .catch(err => console.log(err));
}


  
   


  return (
    <>
    <div>
      <h1>post data</h1>
      <input type='text' placeholder='name' onChange={event=>setName(event.target.value)} name='name'/><br/>
      <input type='email' placeholder='e-mail' onChange={event=>setEmail(event.target.value)} name='email'/><br/>
      <button onClick={postData}>Submit</button>
    </div>


    <div>
      <h1>Check Data</h1>
      <input type='text' placeholder='name' onChange={event=>setCheckname(event.target.value)} name='name'/><br/>
      <input type='email' placeholder='e-mail' onChange={event=>setCheckemail(event.target.value)} name='email'/><br/>
      <button onClick={checkData}>Submit</button>
    </div>
    <h1>{validName}</h1>
    {/* <h1>{validEmail}</h1> */}
    

    


    </>
    
  )
}

export default Post;
