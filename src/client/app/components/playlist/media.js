import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/media.css'

export default class Media extends Component {
  render() {
    const { cover, title, author } = this.props

    return (
      <div className="card media">
        <img className="card-img media-image" src={cover} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{author}</p>
        </div>
      </div>
    )
  }  
}

