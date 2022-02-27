import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div onClick={() => {deleteTodo(todo.id)}} className="collection-item" key={todo.id}>
          <span> {todo.content} </span>
        </div>
      );
    })
  ) : (
    <div className="center">There is no todos left</div>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
