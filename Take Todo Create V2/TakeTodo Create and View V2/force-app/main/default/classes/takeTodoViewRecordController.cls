public with sharing class takeTodoViewRecordController {
    @AuraEnabled(cacheable=true)    
    public static List<Account> gettodo() {
        return [
            SELECT Name,Phone,Type,CreatedDate
            FROM Account
            ORDER BY  CreatedDate DESC
        ];
    }
    
}