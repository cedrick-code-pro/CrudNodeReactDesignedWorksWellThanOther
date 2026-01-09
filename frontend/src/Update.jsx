import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios  from 'axios';
import {Link} from 'react-router-dom'

function Update() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState([])

    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
 useEffect(()=>{
     axios.get(`http://localhost:4000/select/${id}`)
     .then((res)=>setValues({name: res.data[0].name,email: res.data[0].email,password: res.data[0].password}))
 },[])

    const HandleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/update/${id}`,values)
        .then((res)=>{console.log(res.data);
            navigate('/')
        })
        .catch((err)=>console.log(err))
    }
  return (
   <div
  className="d-flex align-items-center justify-content-center p-5"
  style={{
    minHeight: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)"
  }}
>
  <div
    className="card shadow-lg rounded-4 p-5"
    style={{ maxWidth: "500px", width: "100%" }}
  >
    {/* Header */}
    <h2 className="text-center mb-4 text-primary fw-bold">Update Student</h2>

    <div className="d-flex justify-content-end mb-4">
      <Link to="/" className="btn btn-outline-success btn-sm">
        <i className="bi bi-arrow-left-circle me-1"></i> Back To Home
      </Link>
    </div>

    {/* Form */}
    <form onSubmit={HandleUpdate}>
      {/* Name */}
      <div className="form-floating mb-3">
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onChange={e => setValues({ ...values, name: e.target.value })}
          required
        />
        <label htmlFor="name">
          <i className="bi bi-person-fill me-2"></i>Name
        </label>
      </div>

      {/* Email */}
      <div className="form-floating mb-3">
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Email"
          value={values.email}
          onChange={e => setValues({ ...values, email: e.target.value })}
          required
        />
        <label htmlFor="email">
          <i className="bi bi-envelope-fill me-2"></i>Email
        </label>
      </div>

      {/* Password */}
      <div className="form-floating mb-4">
        <input
          type="text"
          id="password"
          className="form-control"
          placeholder="Password"
          value={values.password}
          onChange={e => setValues({ ...values, password: e.target.value })}
          required
        />
        <label htmlFor="password">
          <i className="bi bi-lock-fill me-2"></i>Password
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn w-100 fw-bold text-white"
        style={{
          background: "linear-gradient(to right, #667eea, #764ba2)",
          border: "none",
          padding: "0.6rem"
        }}
      >
        Update Student
      </button>
    </form>
  </div>
</div>

  )
}

export default Update
