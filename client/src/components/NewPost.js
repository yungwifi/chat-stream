import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-materialize'
import { API_ROOT, HEADERS } from '../constants';

class NewPost extends Component {
    state = {
        post: {
            content: ''
        }
    }

    handleChange = (e) => {
        const post = { ...this.state.post }
        post[e.target.name] = e.target.value
        console.log(post)
        this.setState({ post })
    }

    createPost = (e) => {
        e.preventDefault()
        console.log("CREATE POST ROUTE BEING CALLED")
        axios.post(`${API_ROOT}/posts`, { headers: HEADERS, post: this.state.post })
            .then((res) => {
                console.log("RESPONSE FROM NEW POST", res.data)
                this.setState({
                    post: res.data.posts,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.createPost}>
                    <textarea type="text" name="content" onChange={this.handleChange}> </textarea>
                    <Button className="black right"> Send </Button>
                </form>
            </div>
        );
    }
}

export default NewPost;