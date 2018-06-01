import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-materialize'

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

    createPost = () => {
        console.log("CREATE POST ROUTE BEING CALLED")
        axios.post(`/posts`, { post: this.state.post })
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
                    <textarea onChange={this.handleChange}> </textarea>
                    <Button className="black right"> Send </Button>
                </form>
            </div>
        );
    }
}

export default NewPost;