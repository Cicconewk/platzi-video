import React from 'react'
import './top-menu.css'

export default function TopMenu (props) {
  return (
    <div className="row top-bar">
      {props.children}
    </div>
  )
}
