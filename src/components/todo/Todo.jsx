import React from "react";
import "./style.css";
import Form from "../form/Form";

function Todo(props) {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "react어려워요T^T",
          body: '과제가 너무 어려워요'
        },
      ]);
        return (
            <div className="todo-container">
                {todos.map((todo) => (
                    <div className="todo" key={todo.id}>
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