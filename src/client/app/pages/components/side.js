import React from 'react'
import logo from '../../../public/images/logo.png'
import '../../styles/side.css'

export default function Side (props) {
  return (
    <div className="col-md-2 side">
      <div className="row">
        <div className="col-md-12">
          <img src={logo} className="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="list-group">
            {
              props.personalPlaylist.map(item => {
                return (<a href="#" className="list-group-item-action" key={item.id}>{item.title}</a>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
