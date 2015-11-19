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

    switch (action.type) {

        case 'CREATE_TASKGROUP':
            return [
                ...state,
                {
                    id: state.reduce((maxId, taskGroup) => Math.max(taskGroup.id, maxId), -1) + 1,
                    title: 'New Task Group',
                    list: []
                }
            ];

        case 'REMOVE_TASKGROUP':
            return state.filter(taskGroup => taskGroup.id !== action.taskGroupId);

        case 'ADD_TITLE':

        case 'ADD_LISTITEM':

        case 'REMOVE_LISTITEM':

        case 'CHECK_LISTITEM':
            console.log("action CHECK_LISTITEM", action);
            let taskGroups = state.taskGroups.slice(0);
            taskGroups[action.taskGroupId].list[action.listItemId].done = !taskGroups[action.taskGroupId].list[action.listItemId].done;
            return {
                taskGroups: taskGroups,
                filterText: ""
            };

        case 'UPDATE_TEXT_LISTITEM':

        case 'SEARCH_TASK':

        default:
            return state;
    }
}