import React, { Component, useState } from 'react'
import { Button } from '../../Common/Button/Button.component'
// import './Register.component.css'
const defaultForm = {
    Username: '',
    email: '',
    Password: '',
    confirmPassword: "",
    dob: '',
    UsernameErr: '',
    passwordErr: '',
}

export const Reg = () => {
    const [formData, setFormData] = useState({defaultForm})
}
const handleChange = e => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]:value
    })
}


        return (
            <div>
                <form className='my-5' onSubmit={this.handleSubmit}>
                    <label className='fs-5'>Username</label>
                    <input type='text' name="Username" className='mb-3' onChange={handleChange} />
                    <p></p>
                    <label className='fs-5'>Password</label>
                    <input type='text' name="Password" className=' mb-3' onChange={handleChange} />
                    <p></p>
                    <label className='fs-5'>email</label>
                    <input type='text' name="email" className=' mb-3' onChange={handleChange} />
                    <p></p>
                    <label className='fs-5'>confirmpassword</label>
                    <input type='text' name="confirmPassword" className=' mb-3' onChange={handleChange} />
                    <p></p>
                    <label className='fs-5'>address</label>
                    <input type='text' name="address" className=' mb-3' onChange={handleChange} />
                    <label className='fs-5'>Dob</label>
                    <input type='text' name="Dob" className=' mb-3' onChange={handleChange} />
                    <label className='fs-5'>Phone</label>
                    <input type='text' name="Phone" className=' mb-3' onChange={handleChange} />
                    <Button
                        enabledLabel='Register'
                        disabledLabel="Registering..."
                        isSubmitting={this.state.isSubmitting}
                        isValidForm={this.state.isValidForm}
                    ></Button>
                </form>
            </div>
        )
