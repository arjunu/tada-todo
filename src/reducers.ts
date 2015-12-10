/// <reference path="../typings/underscore/underscore.d.ts" />

import {List, Task, TaskGroups} from './models/taskgroup.ts';
import {ActionReturnType} from './models/actiontype.ts';
import {_} from 'underscore';

const initialState: TaskGroups = {
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

function taskGroupListReducer(list:List[], action:ActionReturnType):List[] {
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
                if (item.id === action.listItemId){
                    let newItem = _.clone(item);
                    newItem.done = !newItem.done;
                    return newItem;
                }
                return item;
            });

        case "UPDATE_LISTITEM":
            return list.map(item => {
                if (item.id === action.listItemId){
                    let newItem = _.clone(item);
                    newItem.name = action.text;
                    return newItem;
                }
                return item;
            });

        default:
            return list;
    }
}


export function rootReducer(state:TaskGroups = initialState, action:ActionReturnType):TaskGroups {
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
                taskGroups: state.taskGroups.map(taskGroup => {
                    if (taskGroup.id === action.taskGroupId){
                        let newtaskGroup = _.clone(taskGroup);
                        newtaskGroup.title = action.text;
                        return newtaskGroup;
                    }
                    else  return taskGroup;
                }),
                searchText: state.searchText
            };

        case 'ADD_LISTITEM':
        case 'REMOVE_LISTITEM':
        case 'CHECK_LISTITEM':

        case 'UPDATE_LISTITEM':
            return {
                taskGroups: state.taskGroups.map(taskGroup => {
                    if (taskGroup.id === action.taskGroupId){
                        let newtaskGroup = _.clone(taskGroup);
                        newtaskGroup.list =taskGroupListReducer(taskGroup.list, action)
                        return newtaskGroup;
                    }
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