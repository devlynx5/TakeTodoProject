public with sharing class picklistHelper {
    public picklistHelper() {

    }
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getAccount(){
        Map<String,String> AccountMap = new Map<String,String>();
        for(Account AccountObj:[select id,type from Account]){
            AccountMap.put(AccountObj.Id,AccountObj.Type);
        }
        return AccountMap;
    }
}