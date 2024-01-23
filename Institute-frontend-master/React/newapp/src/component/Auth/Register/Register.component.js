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

    //init
    componentDidMount=()=>{
        // api call
        // data prepare
        console.log('init stage at third')
    }
    //update
    componentDidUpdate =()=>{
        console.log('update stage at fourth')
    }
    //delete
    componentWillUnmount = ()=>{
        console.log('delete at last')
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
                    ? this.state.data[fieldName].match(/[@gmail.com]/)
                        ? ''
                        : 'Invalid email'
                    : 'required field'
                break;
            case 'Password':
                errorMsg = this.state.data['confirmPassword']
                ? this.state.data['confirmPassword'] === this.state.data[fieldName]
                    ? ''
                    : "password doesn't match "
                :this.state.data[fieldName]
                    ? this.state.data[fieldName].match(/^[a-z]/)
                        ? this.state.data[fieldName].match(/[A-Z]/)
                            ? this.state.data[fieldName].match(/[0-9]/)
                                ? this.state.data[fieldName].match(/[!@#$%^&*]/)
                                    ? this.state.data[fieldName].length < 8
                                        ? 'password must contain atleast 8 characters'
                                        : this.state.data[fieldName].length > 30
                                            ? 'password must contain maximum 30 character'
                                            : ''
                                    : 'password must include a special character'
                                : 'password must include atleast one number'
                            : 'Password must include atleast one uppercase alphabet'
                        : 'password must include atleast one lowercase alphabet'
                    : 'required field'
                break;
            case 'confirmPassword':
                errorMsg = this.state.data['Password']
                    ? this.state.data['Password'] === this.state.data[fieldName]
                        ? ''
                        : "password doesn't match "
                    : this.state.data[fieldName]
                        ? this.state.data[fieldName].match(/^[a-z]/)
                            ? this.state.data[fieldName].match(/[A-Z]/)
                                ? this.state.data[fieldName].match(/[0-9]/)
                                    ? this.state.data[fieldName].match(/[!@#$%^&*]/)
                                        ? this.state.data[fieldName].length < 8
                                            ? 'password must contain atleast 8 characters'
                                            : this.state.data[fieldName].length > 30
                                                ? 'password must contain maximum 30 character'
                                                : ''
                                        : 'password must include a special character'
                                    : 'password must include atleast one number'
                                : 'Password must include atleast one uppercase alphabet'
                            : 'password must include atleast one lowercase alphabet'
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
                isValidForm: err.length === 0
            })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isSubmitting: true
        })
        setTimeout(()=>{
            this.setState({
                isSubmitting: false
            })
        }, 3000);
    }

    render() {

        return (
            <div>
                <form className='my-5' onSubmit={this.handleSubmit}>
                    <label className='fs-5'>Username</label>
                    <input type='text' name="Username" className='mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.Username}</p>
                    <label className='fs-5'>Password</label>
                    <input type='text' name="Password" className=' mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.Password}</p>
                    <label className='fs-5'>email</label>
                    <input type='text' name="email" className=' mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.email}</p>
                    <label className='fs-5'>confirmpassword</label>
                    <input type='text' name="confirmPassword" className=' mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.confirmPassword}</p>
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