import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <List />
      </div>

      <h1>Working🔥</h1>
        <div className="todos-container">
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              {todo.title}
            </div>
          ))}
        </div>
      <h1>Done🎉</h1>
     
    </div>
  )
}

export default App;