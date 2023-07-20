
import React from 'react';
import Select from 'react-select';
import './Todo.css'

const Todo = ({ todo, onStatusChange, onDelete, onEdit }) => {
  const statusOptions = [
    { value: 'not-completed', label: 'Not Completed' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="todo-card">
      <div className="todo-content">
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
      <Select
        options={statusOptions}
        value={{ value: todo.status, label: todo.status === 'completed' ? 'Completed' : 'Not Completed' }}
        onChange={(selectedOption) => onStatusChange(todo.id, selectedOption.value)}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      <div className="todo-actions">
        <button onClick={() => onEdit(todo.id)} className="edit-button">
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
