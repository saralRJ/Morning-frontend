import React from 'react'

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            Username: '',
            Password: '',
            UsernameErr: '',
            passwordErr: '',
            // isValidForm:'',
            isSubmitting: false
        }
    }
    
    render() {

       
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type='text' name="Username" onChange={this.handleChange} />
                    <label>Password</label>
                    <input type='password' name='Password' onChange={this.handleChange} />
                    <div className="btn">
                    <Button isSubmitting={this.state.isSubmitting}
                    enabledLabel = 'Register'
                    disabledLabel = 'Registering in...'
                    >
                        
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}