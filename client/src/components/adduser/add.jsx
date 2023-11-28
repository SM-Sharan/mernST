import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./add.css";
import axios from "axios";
import toast from 'react-hot-toast';

const Add = () => {

  const users ={
    fname:"",
    lname:"",
    email:"",
    password:"",

  }
  const [user, setUser] = useState(users);
  const navigate =useNavigate();



  const inputHandler = (e) =>{
    const {name, value}= e.target;
    setUser({...user, [name]:value});
    console.log(user);

  }

  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user)
    .then((Response)=>{
      toast.success(Response.data.msg,{position:'top-right'})
      navigate("/")


    }).catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputgroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputgroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputgroup">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>

            <div className="inputgroup">
                <label htmlFor="rollno">Roll Number</label>
                <input type="number" onChange={inputHandler} id="rollno" name="rollno" autoComplete='off' placeholder='Roll Nunber' />
            </div>

            <div className="inputgroup">
                <label htmlFor="pno">Phone Number</label>
                <input type="number" onChange={inputHandler} id="pno" name="pno" autoComplete='off' placeholder='Phone Nunber' />
            </div>
           

            <div className="inputgroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add