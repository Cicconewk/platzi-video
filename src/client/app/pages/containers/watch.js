import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from '../../components/player/video-player'

export default class Watch extends Component {
  render() {
    const { id } = this.props.params;

    return (
      <div className="row">
        <div className="col">
          <VideoPlayer src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' />
        </div>
      </div>
    )
  }
}
