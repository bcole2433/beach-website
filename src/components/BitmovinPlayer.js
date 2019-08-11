import React from 'react';
import { Player } from 'bitmovin-player';

class BitmovinPlayer extends React.Component {
    state = {
        player: null,
    };

    componentDidMount() {
        this.setupPlayer();
    }
    componentWillUnmount() {
        this.destroyPlayer();
    }
    setupPlayer() {
        const config = {
            key: process.env.REACT_APP_BITMOVIN_KEY,
            playback : {
                autoplay: true,
                muted: true,
                preferredTech: [{
                  player: 'html5',
                  streaming: 'dash'
                }, {
                  player: 'flash',
                  streaming: 'hls'
                }]
              },
        };
        const player = new Player(document.getElementById('player'), config);
        player.load({
            dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
            hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
            progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
            poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
          }).then(() => {
            player.play();
          });
    }
    destroyPlayer() {
        if (this.state.player != null) {
            this.state.player.destroy();
            this.setState({
                ...this.state,
                player: null
            });
        }
    }
    render() {
        return <div id="player" className="bmpui-ui-uicontainer 
        bmpui-ui-skin-modern 
        bmpui-flexbox 
        bmpui-player-state-prepared 
        bmpui-fullscreen 
        bmpui-controls-hidden" />;
    }
}

export default BitmovinPlayer;