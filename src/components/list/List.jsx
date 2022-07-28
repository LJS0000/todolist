import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({todos, setTodos}) {


  return (
        <div className="Wraps">
           <h1>Working 🔥</h1>
          <div className="Wrap">
            {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => {
              return (
                <div className="todo" key={todo.id}>
                  <h2>{todo.title}</h2>
                  <h4>{todo.body}</h4>
                  {/* <Todo todos={todos} setTodos={setTodos} todo={todo}/> */}
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
                </div>
                        )
            })}
          </div>
           <h1>Done 🔥</h1>
          <div className="Wrap">
            {todos
            .filter((todo) => todo.isDone)
            .map((todo) => {
              return (
                <div className="todo" key={todo.id}>
                  <h2>{todo.title}</h2>
                  <h4>{todo.body}</h4>
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
                            return {...prev, isDone: false}
                          }
                          return prev;
                        })
                      )}
                    >
                       취소
                    </button>
                  </div>
                  
                </div>
              )
            })}
          </div>        
      </div>        
  )
}    

export default List