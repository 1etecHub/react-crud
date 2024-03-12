import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/data')
    .then(res => setData(res.data))
    .catch(err => console.log(err) )

  }, [])

  return (
    <div className='d-fflex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>
        List of Users
      </h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <Link className='btn btn-sm btn-danger'>Delete</Link>
                  </td>
                  

                </tr>
              ))
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}
