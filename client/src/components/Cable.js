import React, { Component, Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

class Cable extends Component {
    render() {
        return (
            <Fragment>
                <ActionCable
                    key={this.props.chat_room[0]}
                    channel={{ channel: 'PostsChannel', chat_room: this.props.chat_room.id }}
                    onReceived={this.props.handleReceivedPost}
                />
            </Fragment>
        );
    }

};

export default Cable;