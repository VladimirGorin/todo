import React from 'react'
import "./AddTask.css"

export default function AddTask({taskTitle, taskText, id}) {
    return (
    <div className="task">  
        <div className="task-title">
            <h2>{taskTitle}</h2>
        </div>
        <div className="task-text">
            <span>{taskText}</span>
        </div>

    </div>
  )
}
