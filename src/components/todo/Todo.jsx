import "./style.css";

function Todo({todos}) {
    console.log(todos)
    return (
      <div className="todo-container">
        <div>
    
        </div>
        <div>
          <button className="todo-delete-button button">삭제하기</button>
          <button className="todo-complete-button button">완료</button>
        </div>
      </div>
    )   
}

export default Todo