import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  const myStyle = {
    minHeight: "100vh",
  };

  return (
    <div className="container" style={myStyle}>
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
