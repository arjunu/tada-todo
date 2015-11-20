export default {
        
    createTaskGroup(){
        return { type: 'CREATE_TASKGROUP'};
    },
    
    removeTaskGroup(taskGroupIndex) {
        return { type: 'REMOVE_TASKGROUP', taskGroupIndex};
    },
    
    addTitle(text, taskGroupIndex) {
         return { type: 'ADD_TITLE', text, taskGroupIndex};
    },
    
    addListItem(text, taskGroupIndex) {
        return { type: 'ADD_LISTITEM', text, taskGroupIndex};
    },
    
    removeListItem(taskGroupIndex, listItemId){
        return { type: 'REMOVE_LISTITEM', taskGroupIndex, listItemId};
    },
    
    checkListItem(taskGroupIndex, listItemIndex){
        return { type: 'CHECK_LISTITEM', taskGroupIndex, listItemIndex};
    },
    
    updateTextListItem(taskGroupId, listItemId){
        return { type: 'UPDATE_TEXT_LISTITEM', taskGroupId, listItemId};
    },
    
    searchTask(text){
        return {type : 'SEARCH_TASK', text}
    }    
}