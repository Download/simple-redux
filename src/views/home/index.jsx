
import React, { PropTypes as PT } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Api from 'redux-apis'
import { Link } from 'react-router'
import store from '../../shared/stores'
import TodosApi from '../../shared/state/todos'

const FrontPage = (props) => {
  const { todos, api } = props

  console.log('wahh todos:', todos)

  return (
    <div>
      <h2>FrontPage</h2>
      <button onClick={() => api.getTodos()}>Fetch Todos</button>
      <Link to='/about'>About</Link>
      <ul>
        {todos.map((t) => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  )
}

FrontPage.propTypes = {
  error: PT.string.isRequired,
  isPending: PT.bool.isRequired,
  todos: PT.arrayOf(PT.shape({
    userId: PT.number.isRequired,
    id: PT.number.isRequired,
    title: PT.string.isRequired,
    completed: PT.bool.isRequired
  })).isRequired,
  api: PT.instanceOf(Api).isRequired
}

export default connect(store.app.connector)(FrontPage)
