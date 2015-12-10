export type ActionType = {
	createTaskGroup: Function;
    removeTaskGroup: Function;
    editTitle: Function;
    addListItem: Function;
    removeListItem: Function;
    checkListItem: Function;
    updateListItem: Function;
    searchTask: Function;
};

export type ActionReturnType = {
	type: string;
	taskGroupId?: number;
	text?: string;
	id?: number;
	listItemId?: number;
};