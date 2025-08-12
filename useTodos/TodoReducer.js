import { act } from "react";

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[add] add Todo":
      return [...initialState, action.payload];

    case "[rm] delete ToDo":
      return initialState.filter(todo => todo.id !== action.payload);

    case "[slc] select todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
      break;
  }
};
