export default {
        
    createTaskGroup(){
        return { type: 'CREATE_TASKGROUP'};
    },
    
    removeTaskGroup(taskGroupId) {
        return { type: 'REMOVE_TASKGROUP', taskGroupId};
    },
    
    editTitle(text, taskGroupId) {
         return { type: 'EDIT_TITLE', text, taskGroupId};
    },
    
    addListItem(text, taskGroupId) {
        return { type: 'ADD_LISTITEM', text, taskGroupId};
    },
    
    removeListItem(taskGroupId, listItemId){
        return { type: 'REMOVE_LISTITEM', taskGroupId, listItemId};
    },
    
    checkListItem(taskGroupId, listItemId){
        return { type: 'CHECK_LISTITEM', taskGroupId, listItemId};
    },
    
    updateListItem(text, taskGroupId, listItemId){
        return { type: 'UPDATE_LISTITEM', text, taskGroupId, listItemId};
    },
    
    searchTask(text){
        return {type : 'SEARCH_TASK', text}
    }    
}