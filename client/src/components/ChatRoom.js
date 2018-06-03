import React, { Component } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import axios from 'axios'
import Cable from './Cable';
import PostsList from './PostsList';
import NewPost from './NewPost';

class ChatRoom extends Component {
    state = {
        chat_rooms: [],
        activeChatRoom: null
    };

    componentDidMount = () => {
        this.getChatRoom()
    };

    getChatRoom = async () => {
        try {
            const response = await axios.get(`${API_ROOT}/chat_rooms/`)
            this.setState({
                chat_rooms: response.data,
                activeChatRoom: this.state.chat_rooms.id
            })
            console.log(this.state.chat_rooms)
        } catch (error) {
            console.log(error)
        }
    }

    handleClick = id => {
        this.setState({ activeChatRoom: id });
    };

    handleReceivedConversation = response => {
        const { chat_room } = response;
        this.setState({
            chat_rooms: [...this.state.chat_rooms, chat_room]
        });
    };

    handleReceivedMessage = response => {
        const { post } = response;
        const chat_rooms = [...this.state.chat_rooms];
        const chat_room = chat_rooms.find(
            chat_room => chat_room.id === post.chat_room_id
        );
        chat_room.posts = [...chat_room.posts, post];
        this.setState({ chat_room });
    };

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
                />
            </div>
        );
    };
}

export default ChatRoom;

// helpers

const findActiveChatRoom = (chat_rooms, activeChatRoom) => {
    return chat_rooms.find(
        chat_room => chat_room.id === activeChatRoom
    );
};