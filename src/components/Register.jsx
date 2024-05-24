import React, {useState} from 'react'
import { useForm} from "react-hook-form"
import {Input, Button} from "./index.js"
import axios from "axios";
function Register() {
  const {register, handleSubmit} = useForm()
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0].path;
    
    setSelectedFile(file);
  }
  const formData = new FormData();
    formData.append('avatar', selectedFile);


  
    
  const create= async function(){
    try {
      const backendResponce= await axios.post("http://localhost:8000/api/v1/users/register")
    } catch (error) {
      console.log(error,"error while creating account")
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit(create)}>
      <Input lable="Name" type="string" placeholder="Name" {...register("Name")}></Input>
      <Input lable="Email" type="string" placeholder="Email" {...register("Email")}></Input>
      <Input lable="Password" type="string" placeholder="Password" {...register("Password")}></Input>
      <Input lable="Phone" type="string" placeholder="Phone" {...register("Phone")}></Input>
      <div className='m-3 p-3 border-gray-500'>
      <input type="file" accept="image/*" onChange={handleFileChange}{...register("avatar")}/>
      </div>
      <Button onSubmit="create">Register</Button>
    </form>
    </>
  )
}

export default Register