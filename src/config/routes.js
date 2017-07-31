import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MainContainer } from 'containers'

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={MainContainer}></Route>
    </div>
  </Router>
)

export default Routes
