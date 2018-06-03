import React, { Component, Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

class Cable extends Component {
    render() {
        const chatroom = this.props.chat_room.map(chat_room => {
            <div key={chat_room.id}> </div>
        })
        return (
            <Fragment>
                {this.props.chat_room.map(chat_room => {
                    return (
                        <ActionCable
                            key={chatroom}
                            channel={{ channel: 'PostsChannel', chat_room: chat_room.id }}
                            onReceived={this.props.handleReceivedPost}
                        />
                    );
                })}
            </Fragment>
        );
    }

};

export default Cable;