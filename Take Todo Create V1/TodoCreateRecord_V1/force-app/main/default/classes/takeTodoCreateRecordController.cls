public with sharing class takeTodoCreateRecordController {
    public takeTodoCreateRecordController() {

    }
    @AuraEnabled
    public static Account createTodo(Account todoRecObj){
        
        try {

            //inserts and create record
            insert todoRecObj;
            return todoRecObj;
            
            } 
        catch (Exception ex) {
            // error thrown
            throw new AuraHandledException(ex.getMessage());
        }
    }
}