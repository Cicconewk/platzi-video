import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/images/logo.png'
import '../../styles/side.css'

const joinedTitle = (item) => item.toLowerCase().split(" ").join("-")

export default function Side (props) {
  return (
    <div className="col-md-2 side">
      <div className="row">
        <div className="col-sm-12">
          <Link to='/'>
            <img src={logo} className="logo" />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="list-group">
            {
              props.personalPlaylist.map(item => {
                return (<Link to={`/watch/${item.id}`} key={item.id} className="list-group-item-action">{item.title}</Link>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
