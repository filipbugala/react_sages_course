import * as React from 'react';
import { TodoList } from './todos/TodoList';
import { Todo } from './todos/todo';
import { ChangeEvent } from 'react';
// import logo from './logo.svg';

interface State {
  todos: Todo[],
  newTitle: string
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
    newTitle: ''
  }

  addTodo() {
    const todo: Todo = {
      id: Date.now(),
      title: this.state.newTitle,
      completed: false
    }

    // zle:
    // this.state.todos.push(todo)

    this.setState(prevState => ({
      // todos: prevState.todos.concat(todo)
      todos: [...prevState.todos, todo],
      newTitle: ''
    }))

  }

  titleChange(event: ChangeEvent<HTMLInputElement>) {
    // event.persist()
    const value = event.target.value;

    this.setState({
      newTitle: value
    })
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">

            <h3>Todos</h3>
            <TodoList todos={this.state.todos} />

            <div className="input-group">
              <input type="text" className="form-control"
                value={this.state.newTitle}
                onKeyUp={e => e.key == "Enter" && this.addTodo()}
                onChange={e => this.titleChange(e)} />
              <button className="btn" onClick={e => this.addTodo()}>Add</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
