import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {

    
    render(){
        return (
            <div>
                Register Component
                <Link to='/'>Log in</Link>
            </div>
        )
    }
}

export default Register;