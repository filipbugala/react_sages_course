import * as React from "react";
import { ChangeEvent } from "react";
import { TodoList } from './TodoList'
import { Todo } from "./todo";

interface State {
  newTitle: string
}

interface Props {
  title?: string,
  todos: Todo[],
  editor?: boolean,
  addTodo: (title: string) => void
  removeTodo: (id:Todo['id']) => void
}

export class Todos extends React.Component<Props, State> {

  state: State = {
    newTitle: ''
  }

  static defaultProps = {
    title: 'Todos'
  }

  titleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      newTitle: event.target.value
    })
  }

  addTodo() {
    this.props.addTodo(this.state.newTitle)
    this.setState({
      newTitle: ''
    })
  }

  render() {
    return <div>
      <h3>{this.props.title}</h3>

      {this.props.todos.length ?
        <TodoList todos={this.props.todos} 
                  removeTodo={this.props.removeTodo} />
        :
        <p>Nothing to show here</p>
      }

      {this.props.editor ?

        <div className="input-group mt-2">
          <input type="text" className="form-control"
            value={this.state.newTitle}
            onKeyUp={e => e.key == "Enter" && this.addTodo()}
            onChange={e => this.titleChange(e)} />
          <button className="btn" onClick={e => this.addTodo()}>Add</button>
        </div>

        : null}

    </div>
  }
}