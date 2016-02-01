
import { fetchTodos } from '../utils/WebAPIUtil'
import * as types from '../constants/todoTypes'

// async actions via https://github.com/pburtchaell/redux-promise-middleware

export const getTodos = () => ({
  type: types.FETCH_TODOS,
  payload: {
    promise: fetchTodos()
  },
  meta: {
    promiseTypeSuffixes: ['PENDING', 'FULFILLED', 'REJECTED']
  }
})
