const initialState = {
    taskGroups: [{
        id: 0,
        title: "Shopping list",
        list: [
            {id: 0, name: "Milk", done: false},
            {id: 1, name: "Eggs", done: true},
            {id: 2, name: "Bean bag", done: true}
        ]
    },
        {
            id: 1,
            title: "Hit list",
            list: [
                {id: 0, name: "Vinoj", done: false},
                {id: 1, name: "Sandeep", done: true},
                {id: 2, name: "Amala", done: true},
                {id: 3, name: "Dixy", done: true},
                {id: 4, name: "Ajay", done: true},
                {id: 5, name: "Ashwin", done: true},
                {id: 6, name: "Yashin", done: true},
                {id: 7, name: "Mudassir", done: true},
                {id: 8, name: "Ishan", done: true}
            ]
        }
    ],
    searchText: ""
};


export function rootReducer(state = initialState, action) {
    let taskGroups = [...state.taskGroups];

    switch (action.type) {

        case 'CREATE_TASKGROUP':
            return {
                taskGroups: [
                    ...state.taskGroups,
                    {
                        id: state.taskGroups.reduce((maxId, taskGroup) => Math.max(taskGroup.id, maxId), -1) + 1,
                        title: 'New Task Group',
                        list: []
                    }
                ],
                searchText: ""
            };

        case 'REMOVE_TASKGROUP':
            return {
                taskGroups: [state.taskGroups.filter(taskGroup => taskGroup.id !== action.taskGroupId)],
                searchText: ""
            };

        case 'ADD_TITLE':
            return state;

        case 'ADD_LISTITEM':
            return state;

        case 'REMOVE_LISTITEM':
            taskGroups[action.taskGroupId].list = taskGroups[action.taskGroupId].list.filter((item) => {
                console.log(item.id, action.listItemId);
                return item.id !== action.listItemId;
            });

            return {
                taskGroups: taskGroups,
                searchText: ""
            };

        case 'CHECK_LISTITEM':
            taskGroups[action.taskGroupId].list[action.listItemIndex].done = !taskGroups[action.taskGroupId].list[action.listItemIndex].done;
            return {
                taskGroups: taskGroups,
                searchText: ""
            };

        case 'UPDATE_TEXT_LISTITEM':
            return state;

        case 'SEARCH_TASK':
            return {
                taskGroups: state.taskGroups,
                searchText: action.text
            };

        default:
            return state;
    }
}