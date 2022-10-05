import React, { useState } from "react";
import { addTodos } from "../store/reducers/todosSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodos(title));

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="Add" />
        </form>
    );
}

export default TodoForm;
