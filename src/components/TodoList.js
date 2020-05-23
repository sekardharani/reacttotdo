import React, {useState, useContext} from 'react'
import {TodoContext} from "../App";

export default function TodoList() {
    const todolist = useContext(TodoContext);
    console.log(todolist)
    //const [todoItem, settodoItem] = useState([]);
 
    let todoList = todolist.newItem.map((item, i) => {

        console.log(item);
        const taskaction = (event) => {
            console.log(event.currentTarget.id)
            
        }
        return (
            <li key={item.id} id={item.id} className= {item.completed ? "todo-item ui-state-default completed": "todo-item ui-state-default pending"} onClick={taskaction}>
                <div className="checkbox">
                    <label >
                        <input type="checkbox" value="on" />{item.text}
                    </label>
                </div>
            </li>
        );
    });

    if(todolist.newItem.length > 0){
    return (
        <ul className="list-unstyled">
           {todoList}
        </ul>
    )
    }
    else{
        return (
            <div className="notodo">
           <p className="alert alert-info">There are no items.</p>
           </div>
        )
     }
}