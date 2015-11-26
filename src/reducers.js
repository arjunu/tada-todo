import Immutable, { Map, List } from 'immutable';

const initialState = Map({
    taskGroups: List([
    	Map({
	        id: 0,
	        title: "Shopping list",
	        list: List([
	            Map({id: 0, name: "Milk", done: false}),
	            Map({id: 1, name: "Eggs", done: true}),
	            Map({id: 2, name: "Bean bag", done: true})
	        ])
	    }),
        Map({
            id: 1,
            title: "Hit list",
            list: List([
                Map({id: 0, name: "Vinoj", done: false}),
                Map({id: 1, name: "Sandeep", done: true}),
                Map({id: 2, name: "Amala", done: true}),
                Map({id: 3, name: "Dixy", done: true}),
                Map({id: 4, name: "Ajay", done: true}),
                Map({id: 5, name: "Ashwin", done: true}),
                Map({id: 6, name: "Yashin", done: true}),
                Map({id: 7, name: "Mudassir", done: true}),
                Map({id: 8, name: "Ishan", done: true})
            ])
        })
    ]),
    searchText: ""
});


function taskGroupListReducer(list = [], action) {
    switch (action.type) {

        case "ADD_LISTITEM":
            return List([...list, Map({
                done: false,
                id: list
                    .reduce((maxId, listItem) => Math.max(listItem.id, maxId), -1) + 1,
                name: action.text
            })]);

        case "REMOVE_LISTITEM":
            return List(list.filter((item) => (item.id !== action.listItemIndex)));

        case "CHECK_LISTITEM":
            return List([...list.slice(0, action.listItemIndex),
                Map({
                    ...list[action.listItemIndex],
                    done: !list[action.listItemIndex].done
                }),
                ...list.slice(action.listItemIndex + 1)]);

        default:
            return list;
    }
}


export function rootReducer(state = initialState, action) {
    //todo remove this line
    let taskGroups = state.get('taskGroups');

    switch (action.type) {

        case 'CREATE_TASKGROUP':
            return Map({
                taskGroups: List([
                    ...state.get('taskGroups'),
                    Map({
                        id: taskGroups.toJS().reduce((maxId, taskGroup) => Math.max(taskGroup.id, maxId), -1) + 1,
                        title: 'New Task Group',
                        list: List()
                    })
                ]),
                searchText: state.get('searchText')
            });

        case 'REMOVE_TASKGROUP':
            return Map({
                taskGroups: List(state.get('taskGroups').toJS().filter(taskGroup => taskGroup.id !== action.taskGroupId)),
                searchText: state.get('searchText')
            });

        case 'EDIT_TITLE':
            return Map({
                taskGroups: List(state.get('taskGroups').toJS().map(taskGroup => {
                    if (taskGroup.id === action.taskGroupId)
                        return Map({
                            ...taskGroup, title: action.text
                        });
                    else  return Map(taskGroup);
                })),
                searchText: state.get('searchText')
            });

        case 'ADD_LISTITEM':
        case 'REMOVE_LISTITEM':
        case 'CHECK_LISTITEM':
            return Map({
                taskGroups: List(state.get('taskGroups').toJS().map(taskGroup => {
                    if (taskGroup.id === action.taskGroupId)
                        return Map({
                            ...taskGroup ,
                            list: List(taskGroupListReducer(taskGroup.list, action))
                        });
                    else  return Map(taskGroup);
                })),
                searchText: state.get('searchText')
            });

        case 'UPDATE_LISTITEM':
            taskGroups.get(action.taskGroupIndex).get('list').get(action.listItemIndex).set(Map(Object.assign({}, {
                id: taskGroups.get(action.taskGroupIndex).get('list').get(action.listItemIndex).get('id'),
                done: taskGroups.get(action.taskGroupIndex).get('list').get(action.listItemIndex).get('done'),
                name: action.text
            })));

            return Map({
                taskGroups: List(taskGroups),
                searchText: state.get('searchText')
            });

        case 'SEARCH_TASK':
            return Map({
                taskGroups: List(state.get('taskGroups')),
                searchText: action.text
            });

        default:
            return state;
    }
}