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
    
    addListItem(text, taskGroupIndex) {
        return { type: 'ADD_LISTITEM', text, taskGroupIndex};
    },
    
    removeListItem(taskGroupIndex, listItemIndex){
        return { type: 'REMOVE_LISTITEM', taskGroupIndex, listItemIndex};
    },
    
    checkListItem(taskGroupIndex, listItemIndex){
        return { type: 'CHECK_LISTITEM', taskGroupIndex, listItemIndex};
    },
    
    updateListItem(text, taskGroupIndex, listItemIndex){
        return { type: 'UPDATE_LISTITEM', text, taskGroupIndex, listItemIndex};
    },
    
    searchTask(text){
        return {type : 'SEARCH_TASK', text}
    }    
}