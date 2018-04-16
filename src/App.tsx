import * as React from 'react'
import { Todo } from './todos/todo'
import { Todos } from './todos/Todos';

interface State {
  todos: Todo[]
}

class App extends React.Component<{}, State> {

  state: State = {
    todos: [
      {
        id: 123,
        title: 'Test Todo',
        completed: false
      }
    ]
  }

  addTodo = (title:string) => {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false
    }

    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }))
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">

            <Todos todos={this.state.todos} 
                  addTodo={this.addTodo}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
