import React from "react";
import { Task } from "../types/taskTypes";

interface TaskItemProps {
    task: Task;
    toggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete }) => {
    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
            <span>{task.description}</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
        </div>
    );
};

export default TaskItem;
