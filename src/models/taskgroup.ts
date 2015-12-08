export type list = {
    id: number;
    name: string;
    done: boolean;
}

export type taskGroup = {
    id: number;
    title: string;
    list: list[];
}

export type taskGroups = {
    taskGroups: taskGroup;
    searchText: string;
}