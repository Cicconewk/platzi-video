import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './search.css'

export default class Search extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <form className="search-form">
            <input type="text" placeholder="Search..." className="search-input" />
        </form>
      </div>
    )
  }
}
