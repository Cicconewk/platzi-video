import React, { Component } from 'react'

export default class VideoPlayer extends Component {
  render() {
    const { src } = this.props

    return (
      <div className="">
        <div className="row">
          <div className="col">
            <div className="">TITULO</div>
            <video src={src} width={400} height={500} />
          </div>
        </div>
      </div>
    )
  }
}
