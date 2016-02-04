import link from 'redux-apis'
import { createStore } from 'redux'

let TodosApi = require('../state/todos').default

console.log('todos:',TodosApi)

let app = new TodosApi()
const store = createStore(app.reducer)
link(store, app)
console.log('this does not print :(')

if (module.hot)
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../state/todos', () => {
    TodosApi = require('../state/todos').default
    app = new TodosApi()

    store.replaceReducer(app.reducer)
    link(store, app)
  })

export const getRootStore = () => store
