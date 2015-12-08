export type List = {
    id: number;
    name: string;
    done: boolean;
};

export type Task = {
    id: number;
    title: string;
    list: List[];
};

export type TaskGroups = {
    taskGroups: Task[];
    searchText: string;
};