import React, {useContext} from 'react'
import {TodoContext} from "../App";

export default function Todoform() {
    const todolist = useContext(TodoContext);
    //todolist.push({completed: false, id: 4, text: "sekar dharani"})
    console.log(todolist);
    const addItem = (e) => {
        if(e.keyCode === 13){
            console.log("sekar")
            let NewTodo = e.target.value;
            console.log(NewTodo);
            let NewTodoObject = {
                completed: false,
                id: Math.random(), 
                text: NewTodo
            };
            console.log(NewTodoObject)
            todolist.Itemdispatch({type:"add_item",payload:NewTodoObject});
            console.log(todolist);

        }
    }
    return (
        <header>
            <h1>Dsinz To Do</h1>
            <input type="text" className="form-control add-todo"  placeholder="Add New" onKeyDown={addItem} />
        </header>
    )
}