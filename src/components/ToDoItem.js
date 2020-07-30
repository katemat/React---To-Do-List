import React from 'react';
import './ToDoItem.css';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "green",
    textDecoration: "line-through"
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>{props.item.task}</p>
    </div>
  );
}

export default TodoItem;
