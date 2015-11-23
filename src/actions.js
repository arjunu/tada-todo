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