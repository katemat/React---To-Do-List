import React from 'react';
import './ToDoItem.css';

export default function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todoItem.completed} />
      <p>{props.todoItem.task}</p>
    </div>
  );
}
