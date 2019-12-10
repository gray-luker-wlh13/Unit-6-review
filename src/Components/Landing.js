import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getUser} from '../redux/reducer';

class Landing extends Component {
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

    handleLogin = () => {
        const {email, password} = this.state;
        axios.post('/auth/login', {email, password}).then(res => {
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
                <button onClick={this.handleLogin}>Log in</button>
                <Link to='/register'>Register</Link>
            </div>
        )
    }
}

export default connect(null, {getUser})(Landing);