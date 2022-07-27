import React, { useState } from "react";
import "./style.css";



function Form() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [todos, setTodos] = useState([
      { id: 0, 
        title: "어려워 살려줘", 
        body: "리액트...🤷‍♀️", 
        isDone: false }
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
    setTitle("")
    setBody("")
  }

  
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
      <div className="vertical">
          <h1>Working 🔥</h1>
          <div>  
          {todos
          .filter((todo)=> !todo.isDone)
          .map((todo) => {
            return (
              <div className="todoBoxes">
                <div className="todo" key={todo.id}>

                  <h2>{todo.title}</h2>
                  <h4>{todo.body}</h4>

                  <div className="buttons">
                    <button className="todo-delete-button button"
                      onClick={()=>
                        setTodos((prev)=>
                        prev.filter((prev)=>prev.id!==todo.id))}
                    >삭제하기</button>
                    <button className="todo-complete-button button"
                      onClick={()=>
                        setTodos((prevs)=>
                        prevs.map((prev)=> {
                          if (prev.id === todo.id) {
                            return {...prev, isDone: true}
                          }
                          return prev;
                        })
                      )}
                    >완료</button>
                  </div>

                </div>
              </div>
            )
          })}
          </div> 
          <h1>Done 🎉</h1>
          <div>
            {todos
            .filter((todo)=> todo.isDone)
            .map((todo) => {
              return (
                <div className="todoBoxes">
                  <div className="todo" key={todo.id}>

                    <h2>{todo.title}</h2>
                    <h4>{todo.body}</h4>

                    <div className="buttons">
                      <button className="todo-delete-button button"
                        onClick={()=>
                          setTodos((prev)=>
                          prev.filter((prev)=>prev.id!==todo.id))}
                      >삭제하기</button>
                      <button className="todo-complete-button button"
                        onClick={()=>
                          setTodos((prevs)=>
                          prevs.map((prev)=> {
                            if (prev.id === todo.id) {
                              return {...prev, isDone: false}
                            }
                            return prev;
                          })
                        )}
                      >취소</button>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>  
      </div>
    </div>
  )
}    

export default Form