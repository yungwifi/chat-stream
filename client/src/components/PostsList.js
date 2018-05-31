import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'react-materialize'

const ChatBox = styled.div`
border: solid black 1px;
height: 81vh;
display: flex;
justify-content: space-between;
flex-direction: column;
background-color: black;
color: white;
font-size: 14px;`

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

    createPost = async () => {
        axios.post('/posts')
    }

    render() {
        console.log("RENDERING POSTS", this.state.posts)
        const userPosts = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                    <div>{post.user_id}: {post.content}</div>
                </div>
            )
        })
        return (
            <div>
                <ChatBox >
                    <div>
                        {userPosts}
                    </div>
                    <div>
                        <form>
                            <textarea placeholder="Chat..."> </textarea>
                            <Button className="black right"> Send </Button>
                        </form>
                    </div>
                </ChatBox>
            </div>
        )
    }
}

export default PostsList