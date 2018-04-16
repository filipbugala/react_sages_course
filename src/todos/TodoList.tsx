import { Todo } from "./todo";
import * as React from "react";

interface Props {
  todos: Todo[]
}

export const TodoList = (props: Props) => {
  return <ul className="list-group">
    {props.todos.map(todo =>
      <li className="list-group-item" key={todo.id}> 
        {todo.title} 
      </li>
    )}
  </ul>
}