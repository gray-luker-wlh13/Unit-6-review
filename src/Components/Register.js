import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getUser} from '../redux/reducer';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleRegister = () => {
        const {email, password} = this.state;
        axios.post('/auth/register', {email, password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dash')
        })
        .catch(err => console.log(err))
    }
    
    render(){
        return (
            <div>
                <input 
                    maxLength='100'
                    placeholder='Enter Email'
                    name='email'
                    onChange={(event) => this.handleInput(event)}
                />
                <input 
                    type='password'
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(event) => this.handleInput(event)}
                />
                <button onClick={this.handleRegister}>Register</button>
                <Link to='/'>Log in</Link>
            </div>
        )
    }
}

export default connect(null, {getUser})(Register);