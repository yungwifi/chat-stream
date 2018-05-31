import React from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends React.Component {
    state = {
        youtubeVideo: 'YseW0ucRFTU'
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
            <div>
                <YouTube
                    videoId={this.state.youtubeVideo}
                    opts={opts}
                    onReady={this.playVideo}
                />
                <div> watch shit, dont be creepy </div>
            </div>
        );
    }

}

export default VideoPlayer