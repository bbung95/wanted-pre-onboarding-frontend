import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { fetchAddTodo, fetchGetTodos } from "../modules/api";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");

    const handleAddTodo = async () => {
        const res = await fetchAddTodo(todoInput);

        if (res.status !== 201) {
            alert(res.message);
            return;
        }

        setTodoInput("");

        (async () => {
            const res = await fetchGetTodos();
            setTodos(res.data);
        })();
    };

    const handleDeleteTodosItem = (id) => {
        setTodos([...todos.filter((item) => item.id !== id)]);
    };

    useEffect(() => {
        (async () => {
            const res = await fetchGetTodos();
            setTodos(res.data);
        })();
    }, []);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="m-auto p-6 rounded-3xl bg-white" style={{ width: "450px", height: "530px" }}>
                <ul className="h-96 w-full overflow-y-auto">
                    {todos.map((item) => (
                        <TodoItem key={item.id} info={item} handle={handleDeleteTodosItem} />
                    ))}
                </ul>

                <div className="divider"></div>

                <div className="flex gap-2">
                    <input data-testid="new-todo-input" className="input input-bordered flex-1" type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
                    <button data-testid="new-todo-add-button" className="btn" type="button" onClick={handleAddTodo}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
