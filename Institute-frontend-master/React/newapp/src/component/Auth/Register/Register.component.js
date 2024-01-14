import React, { Component } from 'react'

const defaultForm = {
    Username: '',
    email: '',
    Password: '',
    confirmPassword:"",
    dob:'',
    UsernameErr: '',
    passwordErr: '',
}

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            data:{
                ...defaultForm
            },
            error:{
                ...defaultForm
            },
            isValidForm:false,
            isSubmitting: false
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState(previousData => ({
            data:{
                ...previousData.data,
                [name]: value
            }
        }

        ),() =>{
            // this.validationForm(name)
            console.log(this.state.data)
        })
    }
    validateForm=fieldName =>{

    }

    render() {


        return (
            <div>
                <form className='my-5'>
                    <label className='fs-5'>Username</label>
                    <input type='text' name="Username" className='form-control mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>Password</label>
                    <input type='text' name="Password" className='form-control mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>email</label>
                    <input type='text' name="email" className='form-control mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>confirmpassword</label>
                    <input type='text' name="confirmpassword" className='form-control mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>address</label>
                    <input type='text' name="address" className='form-control mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>Dob</label>
                    <input type='text' name="Dob" className='form-control mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>Phone</label>
                    <input type='text' name="Phone" className='form-control mb-3' onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}