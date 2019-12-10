import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {

    
    render(){
        return (
            <div>
                Landing Component
                <Link to='/register'>Register</Link>
            </div>
        )
    }
}

export default Landing;