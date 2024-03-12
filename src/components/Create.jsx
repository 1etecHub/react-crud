import React from 'react'
import { Link } from 'react-router-dom'

export const Create = () => {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' />
          </div>

          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' />
          </div>

          <div className='mb-3'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' />
          </div>
           
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}
