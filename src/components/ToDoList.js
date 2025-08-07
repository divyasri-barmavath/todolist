//  To-Do List is a written or digital list where you: 
//  Add tasks you want to do
//  Mark them as completed when done
//  Optionally delete them



//Task1 :Adding the tasks in to the list 
//Task2 :Tasks need to be added to the list whenever we press enter rathar than only a button being pressed 
//       and whenever user press enter or click button without giving any input then the Add task button should be disable
//Task3 :Deleting the tasks based on index where we ned to add delete button beside all the tasks that are added
//Task4 :Adding the Search bar beside the add button where the tasks in the list should be displayed based on what I search .
//Task5 :Need to make the each task added to the list working as a separate component where we can reuse them
//Task6 :Set the edit and save button beside each added task 
//Task7 : After loading the page the previous added elements in the list should not be removed




// useState – for managing the component’s reactive state
// Purpose: To store and update dynamic data in your UI

// useEffect – for handling side effects (like fetching/saving data)
// Purpose: To perform actions after rendering, such as:
// Fetching data from an API
// Saving to or reading from localStorage
// Subscribing to events


import React, { useState, useEffect, useRef } from 'react';
import TaskItem from './TaskItem';
import './ToDoList.css';

function ToDoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');
    const [isEditingIndex, setIsEditingIndex] = useState(null);

    const isFirstRender = useRef(true); 

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (e) => setTask(e.target.value);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && task.trim() !== '') addTask();
    };
    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        if (isEditingIndex === index) setIsEditingIndex(null);
    };
    const saveEditedTask = (index, newText) => {
        const updated = tasks.map((t, i) => (i === index ? newText : t));
        setTasks(updated);
        setIsEditingIndex(null);
    };
    const handleSearchChange = (e) => setSearch(e.target.value);
    const filteredTasks = tasks.filter(t => t.toUpperCase().includes(search.toUpperCase()));

    return (
        <div className="todo-container">
            <h2>My To-Do List</h2>
            <input type="text" value={task} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Enter task" />
            <button onClick={addTask} disabled={task.trim() === ''}>Add Task</button>
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Search" style={{ marginLeft: '10px' }} />
            <ul>
                {filteredTasks.map((t, index) => (
                    <TaskItem
                        key={index}
                        text={t}
                        onDelete={() => deleteTask(index)}
                        onSave={(newText) => saveEditedTask(index, newText)}
                        isEditing={isEditingIndex === index}
                        onEdit={() => setIsEditingIndex(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

