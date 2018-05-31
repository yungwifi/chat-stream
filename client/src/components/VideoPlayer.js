import React from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends React.Component {
    state = {
        youtubeVideo: ''
    }

    playVideo = (event) => {
        event.target.playVideo();
    }


    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                loop: 1,
                controls: 0,
                playlist: "YseW0ucRFTU"
            }
        };

        return (
            <YouTube
                videoId={this.state.youtubeVideo}
                opts={opts}
                onReady={this.playVideo}
            />
        );
    }

}

export default VideoPlayer