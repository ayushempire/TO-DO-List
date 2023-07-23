import "./App.css";
import Header from "./Cmponents/Header";
import Footer from "./Cmponents/Footer";
import Todos from "./Cmponents/Todos";
// ! importing states HOOK
import React, { useState } from "react";
import { Addtodo } from "./Cmponents/Addtodo";

function App() {
  /* 
    add todo function
    */
  const addTodo = (title, desc) => {
    console.log("i am adding");
    let srno = todos[todos.length - 1].srno + 1;
    const myaddtodo = {
      srno: srno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myaddtodo]);
    console.log(myaddtodo);
  };
  // todo: function to delete todo
  const onDelete = (todo) => {
    console.log("i am deleted todo", todo);

    // ! using setTodos method
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  // todo: to array *
  // ! using usestate hook
  const [todos, setTodos] = useState([
    {
      srno: 1,
      title: "make mern app",
      desc: "make mern food app for project",
    },
    {
      srno: 2,
      title: "Read book",
      desc: "Read book reach dad poor dad",
    },
    {
      srno: 3,
      title: "Play cards",
      desc: "Play card with friends",
    },
  ]);

  return (
    <div>
      <Header title="My To Do List" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
