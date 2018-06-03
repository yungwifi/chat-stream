import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = () => {
    return (
        <Fragment>
            {this.props.chat_room.map(chat_room => {
                return (
                    <ActionCable
                        key={chat_room.id}
                        channel={{ channel: 'PostsChannel', chat_room: chat_room.id }}
                        onReceived={this.props.handleReceivedPost}
                    />
                );
            })}
        </Fragment>
    );
};

export default Cable;