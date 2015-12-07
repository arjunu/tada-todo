export default {
        
    createTaskGroup(){
        return { type: 'CREATE_TASKGROUP'};
    },
    
    removeTaskGroup(taskGroupId : number) {
        return { type: 'REMOVE_TASKGROUP', taskGroupId};
    },
    
    editTitle(text : string , taskGroupId : number) {
         return { type: 'EDIT_TITLE', text, taskGroupId};
    },
    
    addListItem(text : string, taskGroupId : number) {
        return { type: 'ADD_LISTITEM', text, taskGroupId};
    },
    
    removeListItem(taskGroupId : number, listItemId : number){
        return { type: 'REMOVE_LISTITEM', taskGroupId, listItemId};
    },
    
    checkListItem(taskGroupId : number, listItemId : number){
        return { type: 'CHECK_LISTITEM', taskGroupId, listItemId};
    },
    
    updateListItem(text : string, taskGroupId : number, listItemId : number){
        return { type: 'UPDATE_LISTITEM', text, taskGroupId, listItemId};
    },
    
    searchTask(text : string){
        return {type : 'SEARCH_TASK', text}
    }    
}