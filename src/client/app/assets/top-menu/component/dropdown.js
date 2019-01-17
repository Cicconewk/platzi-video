import React, { Component } from 'react'
import './dropdown.css'

export default class Dropdown extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="col-sm-2">
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {username}
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Action</a>
          </div>
        </div>
      </div>
    )
  }
}
