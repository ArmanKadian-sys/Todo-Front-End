import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer.jsx";

const TodoContext=createContext();

const TodoProvider=({children})=>{
 
  const [todoItems, todoDispatcher]=useReducer(TodoReducer,[]);

return(
  <TodoContext.Provider value={{todoItems, todoDispatcher}}>
    {children}
  </TodoContext.Provider>
)
}

export {TodoProvider, TodoContext};
