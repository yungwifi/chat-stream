import React, { Component } from 'react'
import axios from 'axios'

class PostsList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        try {
            const response = await axios.get('/posts')
            console.log("POSTS", response.data)
            this.setState({ posts: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    deletePost = async (postId) => {
        try {
            await axios.delete(`/posts/${postId}`)

            const posts = await this.getPosts()
            this.setState({ posts })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        console.log("RENDERING POSTS", this.state.posts)
        const userPosts = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                    <div>{post.content}</div>
                    <button onClick={this.deletePost}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Posts</h1>
                {userPosts}
            </div>
        )
    }
}

export default PostsList