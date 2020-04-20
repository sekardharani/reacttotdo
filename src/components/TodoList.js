import React, {useState, useContext} from 'react'
import {TodoContext} from "../App";

export default function TodoList() {
    const todolist = useContext(TodoContext);
    console.log(todolist)
    //const [todoItem, settodoItem] = useState([]);
 
    let todoList = todolist.newItem.map((item, i) => {

        console.log(item);
        return (
            <li key={i} className="todo-item ui-state-default pending">
                <div className="checkbox">
                    <label>
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
