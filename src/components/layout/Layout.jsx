import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";

function Layout() {
    const [Layout, setLayout] = useState("");
  return (
    <div className="layout">
      <div>
        <Header />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <List />
      </div>

      <h1>Working🔥</h1>
       
      <h1>Done🎉</h1>
     
    </div>
  )
}

export default Layout;