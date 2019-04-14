import React, { Component } from 'react'
import Categories from '../../components/categories/categories'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Categories categories={this.props.data.categories} />
      </div>
    );
  }
}
