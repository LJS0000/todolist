import React, { useState } from "react";
import "./style.css";


function Form() {
  const [todos, setTodos] = useState([
      { id: 0, 
        title: "어려워 살려줘", 
        body: "ㅂㄷㅂㄷ", 
        isDone: false }
    ])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setBody(e.target.value)
    }
  }

  const handleTodoSubmit = () => {
    setTodos([...todos, { id: todos.length + 1, title, body, isDone: false }])
    setTitle("")
    setBody("")
  }
  console.log(todos)
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
    </div>
  )
}    

export default Form