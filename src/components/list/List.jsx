import React, { useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List(props) {
    
        return (
            <div className="list-container">
                <h1 className="list-title">Working🔥</h1>
                    <div className="list-wrapper">
                    <div>
                        <Todo />
                    </div>
                    </div>
                <h1 className="list-title">Done🎉</h1>
            </div>
        )  
}    

export default List