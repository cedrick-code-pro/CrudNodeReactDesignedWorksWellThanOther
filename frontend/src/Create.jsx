import React ,{useState}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
function Create() {
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    });
    const navigate=useNavigate();

  const HandleClick=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:4000/insert", values)
      .then(res=>{console.log(res);
       navigate('/')
      })
      .catch(res=>console.log(err))
  }
  return (
  <div className="d-flex align-items-center justify-content-center bg-gradient" style={{ minHeight: '100vh', background: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
  <div className="card shadow-lg p-4" style={{ maxWidth: '450px', width: '100%', borderRadius: '1rem' }}>
    
    <h2 className="text-center mb-4 fw-bold text-primary">Create New Student</h2>

    <div className="d-flex justify-content-end mb-3">
      <Link to="/" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left-circle me-1"></i> Back to Home
      </Link>
    </div>

    <form onSubmit={HandleClick}>

      {/* Name Input */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          onChange={e => setValues({ ...values, name: e.target.value })}
          required
        />
        <label htmlFor="name"><i className="bi bi-person-fill me-2"></i>Full Name</label>
      </div>

      {/* Email Input */}
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={e => setValues({ ...values, email: e.target.value })}
          required
        />
        <label htmlFor="email"><i className="bi bi-envelope-fill me-2"></i>Email Address</label>
      </div>

      {/* Password Input */}
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={e => setValues({ ...values, password: e.target.value })}
          required
        />
        <label htmlFor="password"><i className="bi bi-lock-fill me-2"></i>Password</label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)', border: 'none' }}>
        Save New Student
      </button>
    </form>
  </div>
</div>

  )
}

export default Create
