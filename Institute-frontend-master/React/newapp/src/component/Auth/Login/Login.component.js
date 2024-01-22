import React, { Component } from 'react';
import './Login.component.css'
import { Button } from '../../Common/Button/Button.component';


export class Login extends Component {
    constructor() {
        super()
        this.state = {
            Username: '',
            Password: '',
            UsernameErr: '',
            PasswordErr: '',
            isValidForm:false,
            isSubmitting: false
        }
    }

    handleChange=(event) => {
        // console.log(event.target.value)
        const {name, value} = event.target;
        this.setState({
            [name]: value
        }, ()=>{

            // console.log(this.state.Username)
            console.log(this.state)
            this.validationForm(name)
        })
    }

validationForm = (FieldName) => {
    var errMsg;
    var errorField = FieldName + "Error"
    errMsg = this.state[FieldName]
    ?""
    :"Required Field"
    this.setState({
        [errorField]:errMsg
    },() => {
        console.log(this.state)
    })
}

    // handlePassword=(event) =>{
    //     // console.log(event.target)
    //     const {name, value} = event.target;
    //     this.setState({
    //         [name]: value
    //     })
    // }
    handleSubmit= e => {
        e.preventDefault()
        this.setState({
            isSubmitting: true
        })
        // api call
        // send data to server
        setTimeout(()=>{
            this.setState({
                isSubmitting: false
            })
        }, 3000)
    }


    render() {

       
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type='text' name="Username" onChange={this.handleChange} />
                    <p style={{color: 'red'}}>{this.state.UsernameErr}</p>
                    <label>Password</label>
                    <input type='password' name='Password' onChange={this.handleChange} />
                    <p style={{color: 'red'}}>{this.state.PasswordErr}</p>
                    <div className="btn">
                    <Button isSubmitting={this.state.isSubmitting}
                    enabledLabel = 'Login'
                    disabledLabel = 'Loging in...'
                    isValidForm={this.state.Username && this.state.Password}
                    >                        
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}