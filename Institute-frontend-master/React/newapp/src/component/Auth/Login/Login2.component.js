import React, { Component } from 'react';
import './Login.component.css'
import { Button } from '../../Common/Button/Button.component';

const defaultForm = {
    Username: '',
    Password: '',
}

export class Login2 extends Component {
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
                    ? ""
                    : '*required field'
                break;
            case 'Password':
                errorMsg = this.state.data['Password']
                    ? ""
                    : '*required field'
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
    render() {


        return (
            <div>
                <form className='my-5'>
                    <label className='fs-5'>Username</label>
                    <input type='text' name="Username" className='mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.Username}</p>
                    <label className='fs-5'>Password</label>
                    <input type='password' name="Password" className=' mb-3' onChange={this.handleChange} />
                    <p>{this.state.error.Password}</p>
                    <div className="btn">
                    <Button
                        enabledLabel='Sign in'
                        disabledLabel="Signing in..."
                        isSubmitting={this.state.isSubmitting}
                        isValidForm={this.state.isValidForm}
                    ></Button>
                    </div>
                </form>
            </div>
        )
    }
}
