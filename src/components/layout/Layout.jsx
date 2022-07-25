// import { useState } from "react";
import React from "react";
import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

function Layout(props) {
    return (
        <div className="todolist">
            {/* <div>나는 레이아웃.jsx</div> */}
            <Header/>
            <Form/>
            <List/>
        </div>
    )  
  }    
  
  export default Layout