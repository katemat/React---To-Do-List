import React from 'react';
import ToDoItem from './components/ToDoItem';
import todosData from './todoData';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <h1>My To Do List</h1>
        {todoItems}
      </div>
    );
  }
}

export default App;
