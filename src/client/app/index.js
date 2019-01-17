import React from 'react'
import { render } from 'react-dom'
import HomeLayout from './pages/containers/home'
import Data from '../../api.json'
import userData from '../../user-api.json'

render(<HomeLayout data={Data} userData={userData} />, document.getElementById("home"))