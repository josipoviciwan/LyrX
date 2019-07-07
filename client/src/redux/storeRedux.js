import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todosReducer from "./todosReducer";
//import postsReducer from "./postsReducer";
//import authReducer from "./authReducer";

export const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});

  const rootReducer = {
    //auth: authReducer,
    todos: todosReducer
    //posts: postsReducer
  };

  return createStore(combineReducers(rootReducer), {}, composeEnhancers());
};
