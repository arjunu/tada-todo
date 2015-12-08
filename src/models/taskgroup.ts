export type List = {
    id: number;
    name: string;
    done: boolean;
};

export type taskGroup = {
    id: number;
    title: string;
    list: List[];
};

export type TaskGroups = {
    taskGroups: taskGroup[];
    searchText: string;
};