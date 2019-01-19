import React from 'react'
import '../../styles/top-menu.css'

export default function TopMenu (props) {
  return (
    <div className="row top-bar">
      {props.children}
    </div>
  )
}
