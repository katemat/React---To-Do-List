import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div className="todo-list">
      <h1>My To Do List</h1>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
