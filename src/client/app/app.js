import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/containers/home'
import Watch from './pages/containers/watch'
import Error from './pages/containers/error'

export default function App (props) {
  const { data, userData } = props

  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' 
            render={props => <Home data={data} userData={userData} />} 
          />
          <Route path='/watch' component={Watch} />
          <Route component={Error} />
        </Switch> 
      </div>
    </Router>
  )
}
