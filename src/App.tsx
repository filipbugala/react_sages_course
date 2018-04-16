import * as React from 'react'
import { Todo } from './todos/todo'
import { Todos } from './todos/Todos';

interface State {
  todos: Todo[],
  archived: Todo[]
}

class App extends React.Component<{}, State> {

  state: State = {
    todos: [
      {
        id: 123,
        title: 'Test Todo',
        completed: false
      }
    ],
    archived: []
  }

  addTodo = (title: string) => {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false
    }

    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }))
  }

  archiveTodo = (id: Todo['id']) => {
    this.setState((prevState) => {
      const todo = prevState.todos.find(
        todo => todo.id == id
      )
      return todo? {
        todos: prevState.todos.filter(
          todo => todo.id !== id
        ),
        archived: [...prevState.archived, todo]
      } : null
    })

  }

  removeTodo = (id: Todo['id']) => {
    this.setState(prevState => ({
      archived: prevState.archived.filter(
        todo => todo.id !== id
      )
    }))

  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">

            <Todos todos={this.state.todos}
              editor={true}
              removeTodo={this.archiveTodo}
              addTodo={this.addTodo} />

          </div>
          <div className="col">

            <Todos title="Archived"
              todos={this.state.archived}
              removeTodo={this.removeTodo}
              addTodo={this.addTodo} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
