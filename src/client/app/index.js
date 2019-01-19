import React from 'react'
import { render } from 'react-dom'
import App from './app'
import data from '../../api.json'
import userData from '../../user-api.json'

render(<App data={data} userData={userData} />, document.getElementById("home"))