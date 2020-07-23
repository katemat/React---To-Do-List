import React from 'react';
import ToDoItem from './components/ToDoItem';
import todosData from './todoData';
import './App.css';

function App() {
  const todoItems = todosData.map((item) => (
    <ToDoItem key={item.id} todoItem={item} />
  ));

  return (
    <div className="todo-list">
      <h1>My To Do List</h1>
      {todoItems}
    </div>
  );
}

export default App;
