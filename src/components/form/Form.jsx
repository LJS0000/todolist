import React, {useState} from "react";
import "./style.css";
import List from "../list/List";
import Todo from "../todo/Todo";


function Form() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [todos, setTodos] = useState([
        { id: 0, 
          title: "어려워 살려줘", 
          body: "리액트...🤷‍♀️", 
          isDone: false}
      ])
  
  
  const handleChange = (e) => {
      if (e.target.name === "title") {
      setTitle(e.target.value)
      } else {
      setBody(e.target.value)
      }
  }
  
  const handleTodoSubmit = () => {
      setTodos([...todos, { id: todos.length + 1, title, body, isDone: false }])
  }
  // console.log(todos, setTodos)
    return (
      <div>
        <div className="add-form">
          <label>제목</label>
          <input type="text" name="title" className="add-input" value={title} onChange={handleChange} />
          <label>내용</label>
          <input type="text" name="body" className="add-input" value={body} onChange={handleChange} />
          <button className="add-button" onClick={handleTodoSubmit}>
            추가하기
          </button>
        </div> 
          <List title={title} body={body} todos={todos} setTodos={setTodos}/>
      </div>
    )
}    

export default Form