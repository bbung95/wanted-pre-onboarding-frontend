import React, { useEffect, useState } from "react";
import { fetchDeleteTodo, fetchModifyTodo } from "../modules/api";

const TodoItem = ({ info, handle }) => {
    const [textMode, setTextMode] = useState(true);
    const [todoInfo, setTodoInfo] = useState(info);
    const [inputText, setInputText] = useState(info.todo);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmitTodo = () => {
        if (todoInfo.todo !== inputText) {
            setTodoInfo({ ...todoInfo, todo: inputText });
        }
        setTextMode(!textMode);
    };

    const handleOnChangeChecked = () => {
        setTodoInfo({ ...todoInfo, isCompleted: !todoInfo.isCompleted });
    };

    const handleCancelModify = () => {
        setTextMode(!textMode);
        setInputText(todoInfo.todo);
    };

    const handleModifyTodo = async () => {
        const res = await fetchModifyTodo(todoInfo);

        if (res.status !== 200) {
            alert(res.message);
            return;
        }
    };

    const handleDeleteTodo = async () => {
        const res = await fetchDeleteTodo(todoInfo.id);

        if (res.status !== 204) {
            alert(res.message);
            return;
        }

        handle(todoInfo.id);
    };

    useEffect(() => {
        if (!isLoading) {
            handleModifyTodo();
        }
    }, [todoInfo.isCompleted, todoInfo.todo]);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <li className="flex items-center pl-2 pr-2 h-16 w-full rounded-lg transition-all duration-200 hover:bg-gray-100">
            {textMode ? (
                <>
                    <label className="cursor-pointer label">
                        <input type="checkbox" className="checkbox" defaultChecked={todoInfo.isCompleted} onChange={handleOnChangeChecked} />
                    </label>
                    <p className="pl-2 truncate flex-1">{todoInfo.todo}</p>
                </>
            ) : (
                <input data-testid="modify-input" className="pl-2 mr-1 flex-1 h-10 rounded-md" defaultValue={inputText} onChange={(e) => setInputText(e.target.value)} />
            )}
            <div className="ml-auto flex gap-1">
                {textMode ? (
                    <>
                        <button data-testid="modify-button" type="button" className="btn w-12 h-12" onClick={() => setTextMode(!textMode)}>
                            ···
                        </button>
                        <button data-testid="delete-button" type="button" className="btn btn-error w-12 h-12 p-0" onClick={handleDeleteTodo}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <button data-testid="submit-button" type="button" className="btn btn-info p-0 w-12 h-12" onClick={handleSubmitTodo}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </button>
                        <button data-testid="cancel-button" type="button" className="btn btn-warning w-12 h-12 p-0" onClick={handleCancelModify}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
