import { actionTypes } from "./todosTypes";

const INITIAL_STATE = {
  todos: undefined,
  todosAreChanging: false,
  error: undefined,
  spol: "Ženskoxd xfx",
  brojac: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.todosRequest:
      return {
        ...state,
        todosAreChanging: true,
        error: undefined
      };
    case actionTypes.todosSuccess:
      return {
        ...state,
        todosAreChanging: false,
        todos: action.payload.todos
      };
    case actionTypes.todosError:
      return {
        ...state,
        todosAreChanging: false,
        error: action.payload.error
      };
    case actionTypes.spolChange:
      return {
        ...state,
        todosAreChanging: false,
        error: undefined,
        spol: action.payload.spol
      };
    default:
      return state || INITIAL_STATE;
  }
};
