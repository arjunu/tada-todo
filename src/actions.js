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
    
    removeListItem(taskGroupId, listItemIndex){
        return { type: 'REMOVE_LISTITEM', taskGroupId, listItemIndex};
    },
    
    checkListItem(taskGroupId, listItemIndex){
        return { type: 'CHECK_LISTITEM', taskGroupId, listItemIndex};
    },
    
    updateListItem(text, taskGroupIndex, listItemIndex){
        return { type: 'UPDATE_LISTITEM', text, taskGroupIndex, listItemIndex};
    },
    
    searchTask(text){
        return {type : 'SEARCH_TASK', text}
    }    
}