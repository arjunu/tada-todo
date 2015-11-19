export default {
        
    createTaskGroup(){
        return { type: 'CREATE_TASKGROUP'};
    },
    
    removeTaskGroup(taskGroupId) {
        return { type: 'REMOVE_TASKGROUP', taskGroupId};
    },
    
    addTitle(text) {
        return { type: 'ADD_TITLE', text};
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
    
    updateTextListItem(taskGroupId, listItemId){
        return { type: 'UPDATE_TEXT_LISTITEM', taskGroupId, listItemId};
    },
    
    searchTask(text){
        return {type : 'SEARCH_TASK', text}
    }    
}