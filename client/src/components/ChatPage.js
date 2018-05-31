import React, { Component } from 'react'
import PostsList from './PostsList'
import VideoPlayer from './VideoPlayer'
import Navbar from './Navbar'
import styled from 'styled-components'

const PageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 30px;`

class ChatPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <PageContainer >
                    <VideoPlayer />
                    <PostsList />
                </PageContainer>
            </div>
        );
    }
}

export default ChatPage;