import React, { useState } from "react";
import "./style.css";
import Form from "../form/Form";

function Todo(props) {
    const [todo, setTodo] = useState([
        {
            id: 0,
            title: '',
            body: '',
            isDone: false,
        },
    ])
    return (
        <div className="todolist">
            
            <div>나는 투두.jsx</div>
        </div>
    )  
  }    
  
  export default Todo