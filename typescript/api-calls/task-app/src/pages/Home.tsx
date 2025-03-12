import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filter from "../components/Filter";
import { Task } from "../types/taskTypes";

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<string>("all");

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const toggleComplete = (id: number) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <Filter filter={filter} setFilter={setFilter} />
            <TaskList tasks={filteredTasks} toggleComplete={toggleComplete} />
        </div>
    );
};

export default Home;
