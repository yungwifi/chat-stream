import React, { Component } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import axios from 'axios'
import Cable from './Cable';
import PostsList from './PostsList';

class ChatRoom extends Component {
    state = {
        chat_rooms: {},
        activeChatRoom: 1
    };

    componentDidMount = () => {
        this.getChatRoom()
    };

    getChatRoom = async () => {
        try {
            const response = await axios.get(`${API_ROOT}/chat_rooms/`)
            this.setState({
                chat_rooms: response.data,
            })
            console.log(this.state.chat_rooms)
        } catch (error) {
            console.log(error)
        }
    }

    render = () => {
        return (
            <div className="chatroomList">
                <ActionCable
                    channel={{ channel: 'ChatRoomChannel' }}
                    onReceived={this.handleReceivedConversation}
                />
                <Cable
                    chat_room={this.state.chat_rooms}
                    handleReceivedMessage={this.handleReceivedMessage}
                />
                <PostsList
                    chat_room={this.state.chat_rooms}
                    chatRoomId={this.activeChatRoom}
                />
            </div>
        );
    };
}

export default ChatRoom;