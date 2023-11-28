import React, { useEffect, useState } from 'react'
import "../adduser/add.css"
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


const Edit = () => {

    const users ={
        fname:"",
        lname:"",
        email:"",
        rollno:"",

    }
    const {id}= useParams();
    const [user, setUser]=useState(users);
    const navigate = useNavigate();

    const inputChangeHandler =(e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
        console.log(user);

    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((Response)=>{
            setUser(Response.data);
        }).catch((error)=>{
            console.log(error);
        })

    },[id])

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`, user)
        .then((Response)=>{
          toast.success(Response.data.msg,{position:'top-right'})
          navigate("/")
    
    
        }).catch(error => console.log(error))
    }


  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
    <h3>Update user</h3>
    <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputgroup">
            <label htmlFor='fname'>First name</label>
            <input type="text" value={user.fname} onChange={inputChangeHandler}  id="fname" name="fname" autoComplete='off 'placeholder='First Name'></input>
        </div>

        <div className="inputgroup">
            <label htmlFor='lname'>Last name</label>
            <input type="text" value={user.lname} onChange={inputChangeHandler}  id="lname" name="lname" autoComplete='off 'placeholder='Last Name'></input>
        </div>

        <div className="inputgroup">
            <label htmlFor='email'>Email</label>
            <input type="email" value={user.email} onChange={inputChangeHandler}  id="email" name="email" autoComplete='off 'placeholder='Email'></input>
        </div>

        <div className="inputgroup">
            <label htmlFor='rollno'>Roll Number</label>
            <input type="number" value={user.rollno} onChange={inputChangeHandler}  id="rollno" name="rollno" autoComplete='off 'placeholder='Rollno'></input>
        </div>
        <div className="inputgroup">
            <label htmlFor='pno'>Phone Number</label>
            <input type="number" value={user.pno} onChange={inputChangeHandler}  id="pno" name="pno" autoComplete='off 'placeholder='Phone Number'></input>
        </div>


        <div className="inputgroup">
            <button type="submit">UPDATE USER</button>
        </div>

    </form>
</div>

  )
}

export default Edit