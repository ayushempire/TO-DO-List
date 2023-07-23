import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="my-3">To do list</h3>
      {/* {todos} */}
      {props.todos.length === 0
        ? "No Todos Enjoy!!!"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
