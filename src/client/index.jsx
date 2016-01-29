
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { getRootStore } from '../shared/stores'
import { browserHistory } from 'react-router'
import { Router } from 'react-router'
import routes from '../shared/routes'

if (__DEV__) {
  const Perf = require('react/lib/ReactPerf')
  const a11y = require('react-a11y')

  // Export React and Performance Utility for debugging
  window.React = React
  window.Perf = Perf
  a11y(React)
}

const store = getRootStore()
const rootEl = document.getElementById('app')

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  rootEl
)
