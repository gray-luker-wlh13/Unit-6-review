import React, {Component} from 'react';
import axios from 'axios';
import PostDisplay from './PostDisplay';
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user.user_id}`).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
    
    render(){
        const mappedPosts = this.state.posts.map((post, i) => {
            return (
                <PostDisplay key={i} post={post}/>
            )
        })
        return (
            <div>
                {mappedPosts}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Dashboard);