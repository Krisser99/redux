import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    todoSelector,
    markComplete,
    deleteTodo,
    getTodos,
} from "../store/reducers/todosSlice";

function Todos() {
    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, []);
    const handleToggle = (todoId) => {
        dispatch(markComplete(todoId));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.completed ? "completed" : ""}
                    >
                        {todo.title}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={handleToggle.bind(this, todo.id)}
                        />
                        <button onClick={handleDelete.bind(this, todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
