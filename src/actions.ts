import {ActionType} from './models/actiontype.ts';

export default {

    createTaskGroup<ActionType>() {
        return { type: 'CREATE_TASKGROUP' };
    },

    removeTaskGroup<ActionType>(taskGroupId: number) {
        return { type: 'REMOVE_TASKGROUP', taskGroupId };
    },

    editTitle<ActionType>(text: string, taskGroupId: number) {
        return { type: 'EDIT_TITLE', text, taskGroupId };
    },

    addListItem<ActionType>(text: string, taskGroupId: number) {
        return { type: 'ADD_LISTITEM', text, taskGroupId };
    },

    removeListItem<ActionType>(taskGroupId: number, listItemId: number) {
        return { type: 'REMOVE_LISTITEM', taskGroupId, listItemId };
    },

    checkListItem<ActionType>(taskGroupId: number, listItemId: number) {
        return { type: 'CHECK_LISTITEM', taskGroupId, listItemId };
    },

    updateListItem<ActionType>(text: string, taskGroupId: number, listItemId: number) {
        return { type: 'UPDATE_LISTITEM', text, taskGroupId, listItemId };
    },

    searchTask<ActionType>(text: string) {
        return { type: 'SEARCH_TASK', text }
    }
}