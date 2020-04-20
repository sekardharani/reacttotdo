import React, {useReducer} from 'react';
import './App.css';
import Todoform from "./components/Todoform";
import TodoList from "./components/TodoList";
import Toaction from "./components/Toaction";
const initialState = [
  { completed: false, id: 1, text: "Learn Javascript" },
  { completed: false, id: 2, text: "Angular 8 Plus" },
  { completed: false, id: 3, text: "React Step by step guide" }]


const reducer = (state, action) => {
  switch (action) {
    case "add_item":
      return [...state, initialState]
    default:
      return state
  }
}




export const TodoContext = React.createContext();
const App = (props) => {
  const [newItem, Itemdispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <TodoContext.Provider value={{newItem,Itemdispatch}}>
            <Todoform />
            <TodoList />
            <Toaction />
          </TodoContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
