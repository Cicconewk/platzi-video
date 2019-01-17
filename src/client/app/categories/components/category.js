import React, { Component, Fragment } from 'react'
import Playlist from '../../playlist/components/playlist'
import './category.css'

export default class Category extends Component {
  render() {
    const { title, description } = this.props

    return (
      <Fragment>
          <div className="card-header category-header">
              <h6>{description}</h6>
              <h5>{title}</h5>
        </div>
          <div className="category-body">
          {
            <Playlist playlist={this.props.playlist} />
          }
        </div>
      </Fragment>
    )
  }
}