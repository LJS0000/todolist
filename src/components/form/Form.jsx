import { useState } from "react";
import React from "react";
import "./style.css";

function Form(props) {
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "react어려워요T^T",
          body: '과제가 너무 어려워요',
          isDone: false
        }
      ]);
    // console.log(title, body)
    return (
        <form className="add-form">
            <div>
                <label>제목</label>
                <input 
                    type="text"
                    className='add-input'
                    value={title}
                    onChange={(event) => {
                    settitle(event.target.value)
                    }}
                />
                <label>내용</label>
                <input
                    type="text" 
                    className='add-input'
                    value={body}
                    onChange={(event) => {
                    setbody(event.target.value)
                    }}   
                />
            </div>
            <button 
                className="add-button"
                onClick={() => {
                    setTodos([...todos, { id: todos.length + 1, title: title, body: body }])
                  }}
            >
                추가하기
            </button>
        </form>
    )  
}    

export default Form