import React from "react";
import { Task } from "../types/taskTypes";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    toggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete }) => {
    return (
        <div className="task-list">
            {tasks.length === 0 ? <p>No tasks available.</p> : tasks.map((task) => <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} />)}
        </div>
    );
};

export default TaskList;
