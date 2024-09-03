// src/App.js
import React from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management System</h1>
      </header>
      <TaskList />
    </div>
  );
}

export default App;
