import React from "react";
import "./style.css";
import Form from "../form/Form";

function Todo(props) {
    const [todos, setTodos] = useState([
        {id: 0, title: “”, body: “”, isDone: false}
    ])
        return (
            <div className="todo-container">
                {setTodos.map((todos) => (
                    <div className="todos" key={todo.id}>
                    {todo.title}
                    {todo.body}
                    </div>
                ))}
                <div>
                    <button className="todo-delete-button button">
                        삭제하기
                    </button>
                    <button className="todo-complete-button button">
                        완료
                    </button>
                </div>
                <div className="todos-container">
               
                </div>
            </div>
        )  
}    

export default Todo