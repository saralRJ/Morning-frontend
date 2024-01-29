import React, { Component, useEffect, useState } from 'react'
import { Button } from '../../Common/Button/Button.component'
// import './Register.component.css'
// const defaultForm = {
//     Username: '',
//     email: '',
//     Password: '',
//     confirmPassword: "",
//     dob: '',
//     UsernameErr: '',
//     passwordErr: '',
//     isSubmitting:true,
//     isValidForm:false,
// }

export const Reg = () => {
    const [formData, setFormData] = useState({
        Username:'',
        Email:'',
        Password:'',
        ConfirmPassword:''
    })

const [formErrors, setFormErrors] = useState({});

const handleChange = (event) => {
    const {name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
}

const validateForm = () => {
    let errors = {};
    let isValid= true;

    if (!formData.Username.trim()){
        errors.Username = 'Username required'
        isValid = false;
    }

    if(!formData.Email.trim()){
        errors.Email = 'Email is required'
        isValid = false;
    }else if (!/\S+@\S+\.\S+/.test(formData.Email)){
        errors.Email = 'Invalid email address';
        isValid = false;
    }
    setFormErrors(errors);
    return isValid;
}

const handleSubmit = (event) => {
    event.preventDefault();
if (validateForm()){
    console.log('Form data to be sent:', formData);
    setFormData({
        Username:'',
        Email:"",
        Password:'',
        ConfirmPassword:''
    });
    setFormErrors({});
}


}

return (
    <div>
        <form className='my-5' onSubmit={handleSubmit} >
            <label className='fs-5'>Username</label>
            <input type='text' name="Username" className='mb-3' value={formData.Username} onChange={handleChange} />
            {formErrors.Username && <p>{formErrors.Username}</p>}
            <label className='fs-5'>Password</label>
            <input type='text' name="Password" className=' mb-3' onChange={handleChange} />
            <p></p>
            <label className='fs-5'>email</label>
            <input type='text' name="Email" className=' mb-3' onChange={handleChange} />
            {formErrors.Email && <p>{formErrors.Email}</p>}
            
            <label className='fs-5'>Confirm password</label>
            <input type='text' name="confirmPassword" className=' mb-3' onChange={handleChange} />
            <p></p>
            <label className='fs-5'>address</label>
            <input type='text' name="address" className=' mb-3' onChange={handleChange} />
            <label className='fs-5'>Dob</label>
            <input type='text' name="Dob" className=' mb-3' onChange={handleChange} />
            <label className='fs-5'>Phone</label>
            <input type='text' name="Phone" className=' mb-3' onChange={handleChange} />
            {/* <Button
                enabledLabel='Register'
                disabledLabel="Registering..."
                isSubmitting={!formData.isSubmitting}
                isValidForm={!formData.isValidForm}
            ></Button> */}
            <Button type='Submit'>Submit</Button>
        </form>
    </div>
)
}

