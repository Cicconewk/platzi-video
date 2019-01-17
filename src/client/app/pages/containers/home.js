import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Search from '../../assets/search/component/search'
import TopMenu from '../../assets/top-menu/component/top-menu'
import Dropdown from '../../assets/top-menu/component/dropdown'
import Side from '../components/side'

export default class Home extends Component {
  render(){
    return(
      <HomeLayout>
          <Side personalPlaylist={this.props.userData.users[0].personal_playlist} />
          <div className="col-md-10">
            <TopMenu>
              <Search />
              <Dropdown username={this.props.userData.users[0].username} />
            </TopMenu>

            <Categories categories={this.props.data.categories} />
          </div>
      </HomeLayout>
    );
  }
}
