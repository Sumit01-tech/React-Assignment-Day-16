export enum TaskPriority {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High",
}

export interface Task {
    id: number;
    description: string;
    priority: TaskPriority;
    completed: boolean;
}
