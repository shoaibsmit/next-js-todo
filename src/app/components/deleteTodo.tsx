"use client";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addTodo, deleteTodo } from '@/lib/slices/todoSlice';
import React, { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const dispatch = useAppDispatch();
    const todos = useAppSelector(state => state?.todos?.todos);

    const add = () => {
        dispatch(addTodo(todo));
        setTodo('');
    };

    const remove = (index: number) => {
        dispatch(deleteTodo(index));
    };

    return (
        <div>
            <input 
                type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
            />
            <button onClick={add}>Add Todo</button>
            <ul>
                {todos?.map((text: string, index: number) => (
                    <li key={index}>
                        {text}
                        <button onClick={() => remove(index)} style={{ marginLeft: '10px', color: 'red' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
