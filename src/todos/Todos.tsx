import * as React from "react";
import { ChangeEvent } from "react";
import { TodoList } from './TodoList'
import { Todo } from "./todo";

interface State {
  newTitle: string
}

interface Props {
  todos: Todo[],
  addTodo: (title: string) => void
}

export class Todos extends React.Component<Props, State> {

  state: State = {
    newTitle: ''
  }

  titleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      newTitle: event.target.value
    })
  }

  addTodo() { 
    this.props.addTodo(this.state.newTitle)
    this.setState({
      newTitle:''
    })
  }

  render() {
    return <div>
      <h3>Todos</h3>
      <TodoList todos={this.props.todos} />

      <div className="input-group">
        <input type="text" className="form-control"
          value={this.state.newTitle}
          onKeyUp={e => e.key == "Enter" && this.addTodo()}
          onChange={e => this.titleChange(e)} />
        <button className="btn" onClick={e => this.addTodo()}>Add</button>
      </div>

    </div>
  }
}