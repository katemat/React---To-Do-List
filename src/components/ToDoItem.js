import React from 'react';
import './ToDoItem.css';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.task}</p>
    </div>
  );
}

export default TodoItem;
