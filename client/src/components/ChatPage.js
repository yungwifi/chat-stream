import React, { Component } from 'react'
import PostsList from './PostsList'
import VideoPlayer from './VideoPlayer'
import Navbar from './Navbar'
import Chat from './Chat'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "../util/SessionHeaderUtil"
import ChatRoom from './ChatRoom';

const PageContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 30px;
@media(max-width: 600px){
    display: flex;
    flex-direction:column;
}`

class ChatPage extends Component {

    state = {
        redirect: false
    }

    signOut = async (event) => {
        try {
            event.preventDefault()

            await axios.delete('/auth/sign_out')

            clearAuthTokens();

            this.setState({
                signedIn: false,
                redirect: true
            })
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <div>
                <Navbar />
                <button onClick={this.signOut}>Sign Out</button>
                <PageContainer >
                    <VideoPlayer />
                    <ChatRoom />
                </PageContainer>
            </div>
        );
    }
}

export default ChatPage;