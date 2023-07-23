import "./App.css";
import Header from "./Cmponents/Header";
import Footer from "./Cmponents/Footer";
import Todos from "./Cmponents/Todos";
// ! importing states HOOK
import React, { useState } from "react";
import Addtodo from "./Cmponents/Addtodo";

function App() {
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
    {
      srno: 4,
      title: "Play cards",
      desc: "Play card with friends",
    },
    {
      srno: 5,
      title: "Play cards",
      desc: "Play card with friends",
    },
    {
      srno: 6,
      title: "Play cards",
      desc: "Play card with friends",
    },
  ]);

  return (
    <div>
      <Header title="My To Do List" />
      <Addtodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
