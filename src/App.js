import React, { useReducer } from 'react';
import './App.css';
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// import Child3 from "./components/Child3";

import Todoform from "./components/Todoform";
import TodoList from "./components/TodoList";
import Toaction from "./components/Toaction";
const initialState = [
  { completed: false, id: 1, text: "Learn Javascript" },
  { completed: false, id: 2, text: "Angular 8 Plus" },
  { completed: false, id: 3, text: "React Step by step guide" }]


const reducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
 
  switch (action.type) {
    case "add_item":
      return [...state, action.payload]
    default:
      return state
  }
}




export const TodoContext = React.createContext();


const App = (props) => {

  const [newItem, Itemdispatch] = useReducer(reducer, initialState)
  // const people = [
  //   {name: 'Jay', alive: true},
  //   {name: 'Kailee', alive: true},
  //   {name: 'John', alive: true},
  //   {name: 'Mia', alive: true}
  // ]

  // const reducer = (people, action) => {
  //   if(action.type === 'chomp') {
  //     return people.map(person => {
  //       if(person.name == action.payload) {
  //         person.alive = false;
  //       }
  //       return person;
  //     })
  //   }
  //   if(action.type === 'revive') {
  //     return people.map(person => {
  //       if(person.name === action.payload) {
  //         person.alive = true;
  //       }
  //       return person;
  //     })
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, people);

  return (
    // <div className="container">
     

    //   <Child1 parentSate={state} parentDispatch={dispatch}/>
    //   <Child2 parentSate={state} parentDispatch={dispatch}/>
    //   <Child3 parentSate={state} parentDispatch={dispatch}/>

    // </div>

<div className="container">
<div className="row">
  <div className="todolist">
    <TodoContext.Provider value={{newItem,Itemdispatch}}>
      <Todoform  />
      <TodoList />
      <Toaction />
    </TodoContext.Provider>
  </div>
</div>
</div>
  );
}

export default App;
