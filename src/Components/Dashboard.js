import React, {Component} from 'react';
import axios from 'axios';
import PostDisplay from './PostDisplay';
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            image_url: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user.user_id}`).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handlePost = () => {
        const {image_url} = this.state;
        axios.post(`/api/posts/${this.props.user.user_id}`, {image_url}).then(res => {
            this.setState({
                posts: res.data,
                image_url: ''
            })
        })
        .catch(err => console.log(err))
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
                <input 
                    name='image_url'
                    value={this.state.image_url}
                    placeholder='Add Image'
                    onChange={(event) => this.handleInput(event)}
                />
                <button onClick={this.handlePost}>Add Post</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Dashboard);