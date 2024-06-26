import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, clearTodoUpdate, clearToggle } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const initialTodoUpdate = useSelector(state => state.inputUpdate.initialTodoUpdate);
    const toggleButton = useSelector(state => state.initialStatus.initialToggleStatus);

    useEffect(() => {
        setInput(initialTodoUpdate.text || '');
    }, [initialTodoUpdate]);

    useEffect(()=>{

    },[])
    const addOrUpdateTodoHandler = (e) => {
        e.preventDefault();
        if (toggleButton) {
            dispatch(updateTodo({ id: initialTodoUpdate.id, text: input }));
            dispatch(clearTodoUpdate());
            dispatch(clearToggle()); // Clear toggle status after update
        } else {
            dispatch(addTodo(input));
        }
        setInput('');
    };

    return (
        <form onSubmit={addOrUpdateTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {toggleButton ? null : (
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add Todo
                </button>
            )}
            {toggleButton && (
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Update Todo
                </button>
            )}
        </form>
    );
}

export default AddTodo;
