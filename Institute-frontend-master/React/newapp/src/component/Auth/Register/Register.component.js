import React, { Component } from 'react'
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

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                ...defaultForm
            },
            error: {
                ...defaultForm
            },
            isValidForm: false,
            isSubmitting: false
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState(previousData => ({
            data: {
                ...previousData.data,
                [name]: value
            }
        }

        ), () => {
            this.validationForm(name)
            console.log(this.state.data)
        })
    }
    validationForm = fieldName => {
        var errorMsg;
        switch (fieldName) {
            case 'Username':
                errorMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].match(/^[a-z]/)
                        ? this.state.data[fieldName].length > 3
                            ? ""
                            : 'username must be atleast 3 character'
                        : 'username must start with alphabet'
                    : 'required field'
                break;
            case 'email':
                errorMsg = this.state.data[fieldName]
                    ? this.state.data[fieldName].match(/$[@gmail.com]/)
                        ? ''
                        : 'Invalid email'
                    : 'required field'
                break;

        }
        this.setState(previousError => ({
            error: {
                ...previousError.error,
                [fieldName]: errorMsg
            }
        }), () => {
            var err;
            err = Object.values(this.state.error).filter(err => err)
            // if (err.length == 0) {
            //     this.setState({
            //         isValidForm: true
            //     })
            // }
            // else{
            //     this.setState({
            //         isValidForm: false
            //     })
            // }
            this.setState({
                isValidForm: err.length ===0
            })
        })
    }
    render() {


        return (
            <div>
                <form className='my-5'>
                    <label className='fs-5'>Username</label>
                    <input type='text' name="Username" className='mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.Username}</p>
                    <label className='fs-5'>Password</label>
                    <input type='text' name="Password" className=' mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>email</label>
                    <input type='text' name="email" className=' mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.email}</p>
                    <label className='fs-5'>confirmpassword</label>
                    <input type='text' name="confirmpassword" className=' mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>address</label>
                    <input type='text' name="address" className=' mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>Dob</label>
                    <input type='text' name="Dob" className=' mb-3' onChange={this.handleChange} />
                    <label className='fs-5'>Phone</label>
                    <input type='text' name="Phone" className=' mb-3' onChange={this.handleChange} />
                    <Button
                        enabledLabel='Register'
                        disabledLabel="Registering..."
                        isSubmitting={this.state.isSubmitting}
                        isValidForm={this.state.isValidForm}
                    ></Button>
                </form>
            </div>
        )
    }
}