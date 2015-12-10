import {ActionReturnType} from './models/actiontype.ts';

export default {

    createTaskGroup(): ActionReturnType{
        return {type: 'CREATE_TASKGROUP'};
    },

    removeTaskGroup(taskGroupId:number): ActionReturnType {
        return {type: 'REMOVE_TASKGROUP', taskGroupId};
    },

    editTitle(text:string, taskGroupId:number): ActionReturnType {
        return {type: 'EDIT_TITLE', text, taskGroupId};
    },

    addListItem(text:string, taskGroupId:number): ActionReturnType {
        return {type: 'ADD_LISTITEM', text, taskGroupId};
    },

    removeListItem(taskGroupId:number, listItemId:number): ActionReturnType {
        return {type: 'REMOVE_LISTITEM', taskGroupId, listItemId};
    },

    checkListItem(taskGroupId:number, listItemId:number): ActionReturnType {
        return {type: 'CHECK_LISTITEM', taskGroupId, listItemId};
    },

    updateListItem(text:string, taskGroupId:number, listItemId:number): ActionReturnType {
        return {type: 'UPDATE_LISTITEM', text, taskGroupId, listItemId};
    },

    searchTask(text:string): ActionReturnType {
        return {type: 'SEARCH_TASK', text}
    }
}