// import { useState } from "react";
import React from "react";
import "./style.css";
import Todo from "../todo/Todo";


function List(props) {
  return (
      <div className="todolist">
          <div>
            <h2>Working 🔥</h2>
            <Todo/>
            <h2>Done 🎉</h2>
            
          </div>
      </div>
  )  
}    

export default List