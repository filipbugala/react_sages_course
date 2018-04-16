import * as React from 'react';
import { TodoList } from './todos/TodoList';
import { Todo } from './todos/todo';
import { ChangeEvent } from 'react';
// import logo from './logo.svg';

interface State{
  todos:Todo[], newTitle:string, counter:number
}

class App extends React.Component<{},State> {

  state: State = {
    todos: [
      {
        id: 123,
        title: 'Test Todo',
        completed: false
      }
    ],
    newTitle: '',
    counter: 0
  }


  titleChange(event: ChangeEvent<HTMLInputElement>) {
    // event.persist()
    const value = event.target.value;

    
    this.setState({
      newTitle: value
    })

    this.setState(prevState => {
      return {
        counter: prevState.newTitle.length
      }
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
              <input type="text" className="form-control" onChange={e => this.titleChange(e)} />
              <button className="btn">Add</button>
            </div>
            {this.state.counter}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
