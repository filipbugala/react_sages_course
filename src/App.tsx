import * as React from 'react';
import { TodoList } from './todos/TodoList';
import { Todo } from './todos/todo';
import { ChangeEvent } from 'react';
// import logo from './logo.svg';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 123,
        title: 'Test Todo',
        completed: false
      }
    ] as Todo[],
    newTitle:''
  }

  titleChange(event: ChangeEvent<HTMLInputElement>) {
    // event.persist()
    const value = event.target.value;

      setTimeout( () => {
        console.log(value);
      },0)
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">

            <h3>Todos</h3>
            <TodoList todos={this.state.todos} />

            <div className="input-group">
              <input type="text" className="form-control" onChange={this.titleChange} />
              <button className="btn">Add</button>
            </div>
            {  }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
