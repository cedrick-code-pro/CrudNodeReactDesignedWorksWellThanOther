import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';

function Home() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[]);

    //delete

    const HandleDelete= (id)=>{
       axios.delete(`http://localhost:4000/delete/${id}`)
       .then((res)=> {
        location.reload()
       })
       .catch(err=>console.log(err))

    }
  return (
   <div className="d-flex vh-100 bg-primary justify-content-center align-items-start p-5">
  <div className="card shadow-lg rounded w-100" style={{ maxWidth: '1000px' }}>
    
    {/* Header */}
    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h3 className="mb-0">List of All Students</h3>
      <Link to="/Create" className="btn btn-success">
        <i className="bi bi-plus-lg me-1"></i> Create +
      </Link>
    </div>

    {/* Table */}
    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>
                <td>
                  <Link
                    to={`/Update/${student.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    <i className="bi bi-pencil-fill"></i> Update
                  </Link>
                  <button
                    onClick={() => HandleDelete(student.id)}
                    className="btn btn-sm btn-danger"
                  >
                    <i className="bi bi-trash-fill"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>
</div>

  )
}

export default Home
