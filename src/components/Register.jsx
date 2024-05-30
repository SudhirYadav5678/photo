import React from 'react';
import { useForm } from 'react-hook-form';
//import axios from "../axiosconfig.js"

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const value={
    name:"",
    email:"",
    password:"",
    phone:"",
    avatar:""
  }
  const onSubmit = ()=>{
    const create= async function(){
      try {
          await axios.post("/api/v1/users/register",value).then(function (res) {
            console.log(res);
          })
      } catch (error) {
          console.log("create user", error);
      }}}
  


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">name</label>
        <input
          id="name"
          {...register('name', { required: true })}
        />
        {errors.username && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

  
  
  

  
export default RegisterForm;
