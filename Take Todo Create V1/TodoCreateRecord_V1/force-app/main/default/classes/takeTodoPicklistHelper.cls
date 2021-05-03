public with sharing class takeTodoPicklistHelper {
    public takeTodoPicklistHelper() {

    }
    // uses a search query to find the type and id of picklist field
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getTodoType(){
        Map<String,String> AccountMap = new Map<String,String>();
        for(Account AccountObj:[select id,type from Account]){
            AccountMap.put(AccountObj.Id,AccountObj.Type);
        }
        //stores id in variable below and is then used in takeTodoCreateRecord.js to pass the list of drop down from database
        return AccountMap;
    }
}
