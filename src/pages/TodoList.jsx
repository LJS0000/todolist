import React from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";


function TodoList(props) {
  

  return (
      <div className="todolist">
          <Layout>
            <Header/>
            <Form 
            // todos={todos}
            // setTodos={setTodos}
            />
            <List
            //  todos={todos}
            //  setTodos={setTodos}
             />
          </Layout>
      </div>
  )  
}    

export default TodoList