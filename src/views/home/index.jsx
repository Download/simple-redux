
import React, { PropTypes as PT } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import store from '../../shared/stores'
import TodosApi from '../../shared/state/todos'

const FrontPage = (props) => {
  const { todos, getTodos } = props

  console.log('wahh todos:', todos)

  return (
    <div>
      <h2>FrontPage</h2>
      <button onClick={getTodos}>Fetch Todos</button>
      <Link to='/about'>About</Link>
      <ul>
        {todos.todos.map((t) => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  )
}

FrontPage.propTypes = {
  getTodos: PT.func.isRequired,
  todos: PT.shape({
    error: PT.string.isRequired,
    isPending: PT.bool.isRequired,
    todos: PT.arrayOf(PT.shape({
      userId: PT.number.isRequired,
      id: PT.number.isRequired,
      title: PT.string.isRequired,
      completed: PT.bool.isRequired
    })).isRequired
  })
}

export default connect(store.getRootStore().connector)(FrontPage)
