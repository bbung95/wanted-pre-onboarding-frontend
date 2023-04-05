import React from "react";

const TodoItem = () => {
    return (
        <li className="flex items-center pl-2 pr-2 h-16 w-full rounded-lg transition-all duration-200 hover:bg-gray-100">
            <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox" />
            </label>
            <p className="pl-2 truncate flex-1">오늘의 할일</p>
            <div className="ml-auto flex gap-1">
                <button className="btn">-</button>
                <button className="btn btn-error">-</button>
            </div>
        </li>
    );
};

export default TodoItem;
