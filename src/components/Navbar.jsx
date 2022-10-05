import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../store/reducers/todosSlice";
import TodoForm from "./Form";

function Navbar() {
    const todos = useSelector(todoSelector);

    

    return (
        <div className="navbar">
            <h1>My Redux App Todos</h1>
            <TodoForm />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Totol Todos: {todos.length}</li>
            </ul>
        </div>
    );
}

export default Navbar;
