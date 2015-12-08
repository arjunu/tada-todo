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


function taskGroupListReducer(list =[], action) {
    switch (action.type) {

        case "ADD_LISTITEM":
            return [...list, {
                done: false,
                id: list
                    .reduce((maxId, listItem) => Math.max(listItem.id, maxId), -1) + 1,
                name: action.text
            }];

        case "REMOVE_LISTITEM":
            return list.filter((item) => (item.id !== action.listItemId));

        case "CHECK_LISTITEM":
            return list.map(item => {
                if (item.id === action.listItemId)
                    return {...item, done: !item.done};
                return item;
            });

        case "UPDATE_LISTITEM":
            return list.map(item => {
                if (item.id === action.listItemId)
                    return {...item, name: action.text};
                return item;
            });

        default:
            return list;
    }
}


export function rootReducer(state = initialState, action) {
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
                searchText: state.searchText
            };

        case 'REMOVE_TASKGROUP':
            return {
                taskGroups: state.taskGroups.filter(taskGroup => taskGroup.id !== action.taskGroupId),
                searchText: state.searchText
            };

        case 'EDIT_TITLE':
            return {
                taskGroups: state.taskGroups.map(taskGroup => 
                {
                    if (taskGroup.id === action.taskGroupId)
                        return {
                            ...taskGroup, title: action.text
                        };
                    else  return taskGroup;
                }),
                searchText: state.searchText
            };
            
        case 'UPDATE_LISTITEM':
            return {
                taskGroups: state.taskGroups.map(taskGroup => {
                    if (taskGroup.id === action.taskGroupId)
                        return {
                            ...taskGroup,
                            list: taskGroupListReducer(taskGroup.list, action)
                        };
                    else  return taskGroup;
                }),
                searchText: state.searchText
            };

        case 'SEARCH_TASK':
            return {
                taskGroups: state.taskGroups,
                searchText: action.text
            };

        default:
            return state;
    }
}