import { useState } from "react";
import "./style.css";

function Todo({todos, todo, setTodos}) {

// console.log(todos)
  
  return (
    <div className="buttons">
          <button className="todo-delete-button button"
             onClick={()=>
              setTodos((prev)=>
              prev.filter((prev)=>prev.id!==todo.id))}> 
            삭제
          </button>

          <button
            className="todo-complete-button button"
            onClick={()=>
              setTodos((prevs)=>
              prevs.map((prev)=> {
                if (prev.id === todo.id) {
                  return {...prev, isDone: true}
                }
                return prev;
              })
            )}
          >
            완료
          </button>
        </div>
  )   
}

export default Todo