import "./App.css";
import Header from "./Cmponents/Header";
import Footer from "./Cmponents/Footer";
import Todos from "./Cmponents/Todos";
// ! importing states HOOK
import React, { useEffect, useState } from "react";
import { Addtodo } from "./Cmponents/Addtodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./Cmponents/About";

function App() {
  // checking weather local starage is null or not
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  /* 
    add todo function
    */
  const addTodo = (title, desc) => {
    // console.log("i am adding");
    let srno = 0;
    if (todos.length === 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }
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

  // ! passing initTodo into todos array
  const [todos, setTodos] = useState(initTodo);
  // {
  //   srno: 1,
  //   title: "make mern app",
  //   desc: "make mern food app for project",
  // },
  // {
  //   srno: 2,
  //   title: "Read book",
  //   desc: "Read book reach dad poor dad",
  // },
  // {
  //   srno: 3,
  //   title: "Play cards",
  //   desc: "Play card with friends",
  // },

  // ? useEffect hook function to call setItem at local storage at each time

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My To Do List" />

        {/* <Routes>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Addtodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
