import React from 'react'
import '../../styles/home-layout.css'

export default function HomeLayout(props) {
  return(
    <div className="container-fluent">
      <div className="row">
        {props.children}
      </div>
    </div>
  )
}
