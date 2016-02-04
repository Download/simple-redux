import Api from 'redux-apis'
import remote from 'redux-fetch-api'


remote('http://localhost:8080')(TodosApi)
export default class TodosApi extends Api {
  static INITIAL_STATE = { error: '', isPending: false, todos: [] };

  constructor(initState = TodosApi.INITIAL_STATE) {
    super(initState)

    this.setHandler('SUCCESS', function handleSuccess(state, action) {
      console.log('action:', action)
      return { ...state, isPending: false, todos: action.payload }
    })
    this.setHandler('FAILURE', function handleFailure(state, { payload }) {
      return { ...state, isPending: false, error: payload }
    })
  }

  getTodos() {
    this.fetch(`/${utils.API_URL}/todos`)
      .then((r) => this.dispatch(this.createAction('SUCCESS')({ payload: r.json() })))
      .catch((e) => this.dispatch(this.createAction('FAILURE')({ payload: e })))
  }

  todos() {
    return this.getState().todos
  }
}

