import React, {useContext} from 'react';
import {TodoContext} from "../App";

export default function Toaction() {
    const todolist = useContext(TodoContext);

    return (
        <div>
        <footer className="clearfix">
            <div className="pull-left float-left buttons">
                <div>
                    <span title="Add New" className="button add selected">Add</span>
                    <span title="Search" className="button search ">Search</span>
                </div>
            </div>
            <div className="pull-left float-left">{todolist.newItem.length} items left</div>
            <div className="pull-right float-right">
                <ul className="filters list-unstyled clearfix">
                    <li>
                        <span className="selected">All</span>
                    </li>
                    <li>
                        <span className="">Active</span>
                    </li>
                    <li>
                        <span className="">Completed</span>
                    </li>
                </ul>
            </div>
        </footer>
        <p className="info">Press `Esc` to cancel.</p>
        </div>
    )
}
