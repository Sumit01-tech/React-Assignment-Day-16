import React, { useState } from "react";
import { TaskPriority, Task } from "../types/taskTypes";

interface TaskFormProps {
    addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<TaskPriority>(TaskPriority.LOW);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            description,
            priority,
            completed: false,
        };

        addTask(newTask);
        setDescription("");
        setPriority(TaskPriority.LOW);
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Enter task description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}>
                <option value={TaskPriority.LOW}>Low</option>
                <option value={TaskPriority.MEDIUM}>Medium</option>
                <option value={TaskPriority.HIGH}>High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
