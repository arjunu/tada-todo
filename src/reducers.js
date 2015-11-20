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
                        id: taskGroups.reduce((maxId, taskGroup) => Math.max(taskGroup.id, maxId), -1) + 1,
                        title: 'New Task Group',
                        list: []
                    }
                ],
                searchText: ""
            };

        case 'REMOVE_TASKGROUP':
            return {
                taskGroups: taskGroups.filter(taskGroup => taskGroup.id !== action.taskGroupIndex),
                searchText: ""
            };

        case 'ADD_TITLE':
            taskGroups[action.taskGroupIndex].title = action.text;
            return {
                taskGroups: taskGroups,
                searchText: ""
            };

        case 'ADD_LISTITEM':
            taskGroups[action.taskGroupIndex].list = [...taskGroups[action.taskGroupIndex].list,
                {
                    done: false,
                    id: taskGroups[action.taskGroupIndex].list
                        .reduce((maxId, listItem) => Math.max(listItem.id, maxId), -1) + 1,
                    name: action.text
                }];
            return {
                taskGroups: taskGroups,
                searchText: ""
            };

        case 'REMOVE_LISTITEM':
            taskGroups[action.taskGroupIndex].list = taskGroups[action.taskGroupIndex].list.filter((item) => (item.id !== action.listItemId));

            return {
                taskGroups: taskGroups,
                searchText: ""
            };

        case 'CHECK_LISTITEM':
            taskGroups[action.taskGroupIndex].list[action.listItemIndex] = Object.assign({}, {
                id: taskGroups[action.taskGroupIndex].list[action.listItemIndex].id,
                done: !taskGroups[action.taskGroupIndex].list[action.listItemIndex].done,
                name: taskGroups[action.taskGroupIndex].list[action.listItemIndex].name
            });

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