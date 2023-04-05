import React from "react";
import TodoItem from "../components/TodoItem";

const Todo = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="m-auto p-6 rounded-3xl bg-white" style={{ width: "450px", height: "530px" }}>
                <ul className="h-96 w-full overflow-y-auto">
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </ul>

                <div className="divider"></div>

                <div className="flex gap-2">
                    <input className="input input-bordered flex-1" type="text" />
                    <button className="btn" type="button">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
