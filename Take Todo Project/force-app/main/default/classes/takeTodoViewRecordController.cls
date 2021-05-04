public with sharing class takeTodoViewRecordController {
    @AuraEnabled(cacheable=true)    
    public static List<Account> gettodo() {
        return [
            // this query gets the name, phone,Type and created Date of each todo and displays them in order of decensing ( shows the most recent ones created)
            SELECT Name,Phone,Type,CreatedDate
            FROM Account
            ORDER BY  CreatedDate DESC
        ];
    }
    
}