
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Handler from '../../views/root'
import { FrontPage, AboutPage } from '../../views'

export default (
  <Route component={Handler} path='/'>
    <IndexRoute component={FrontPage}/>
    <Route component={AboutPage} path='/about'/>
  </Route>
)
