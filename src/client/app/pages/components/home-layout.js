import React from 'react'
import Search from '../../components/search/search'
import TopMenu from '../../components/top-menu/top-menu'
import Dropdown from '../../components/top-menu/dropdown'
import Side from '../components/side'
import '../../styles/home-layout.css'

export default function HomeLayout(props) {
  return(
    <div className="container-fluent">
      <div className="row">
        <Side personalPlaylist={props.userData.users[0].personal_playlist} />
        <div className="col-sm-10">
          <TopMenu>
            <Search />
            <Dropdown username={props.userData.users[0].username} />
          </TopMenu>
          {props.children}
        </div>
      </div>
    </div>
  )
}
