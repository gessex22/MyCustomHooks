import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "./TodoReducer";

const initialState = [];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = (initialState) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[add] add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[slc] select todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[rm] delete ToDo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodos: todos.filter((todo) => todo.done != true).length,
  };
};
