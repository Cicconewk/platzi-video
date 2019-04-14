import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeLayout from './pages/components/home-layout'

import Home from './pages/containers/home'
import Watch from './pages/containers/watch'
import Error from './pages/containers/error'

export default function App (props) {
  const { data, userData } = props

  return(
    <Router>
      <HomeLayout userData={userData}>
        <Switch>
          <Route exact path='/' 
            render={props => <Home data={data} />} 
          />
          <Route path='/watch/:id' 
            render={({match}) => (
              <Watch params={match.params} />
            )} />
          <Route component={Error} />
        </Switch> 
      </HomeLayout>
    </Router>
  )
}
