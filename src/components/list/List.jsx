// import { useState } from "react";
import React from "react";
import "./style.css";
import Todo from "../todo/Todo";


function List(props) {
  return (
      <div className="todolist">
          <div>나는 리스트.jsx</div>
          <Todo/>
      </div>
  )  
}    

export default List