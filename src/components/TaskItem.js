import React, { useState, useEffect } from 'react';
function TaskItem({ text, onDelete, onSave, isEditing, onEdit }) {
    const [editedText, setEditedText] = useState(text);
    useEffect(() => {
        setEditedText(text);
    }, [text]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSave(editedText);
        }
    };
    return (
        <li>
            {isEditing ? (
                <div >
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleKeyDown} 
                    />
                    <button onClick={() => onSave(editedText)}>Save</button>
                </div>
            ) : (
                <div>
                    {text}
                    <button onClick={onEdit}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            )}
        </li>
    );
}

export default TaskItem;
