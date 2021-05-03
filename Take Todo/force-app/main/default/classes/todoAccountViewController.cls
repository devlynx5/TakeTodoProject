public with sharing class todoAccountViewController {
    @AuraEnabled(cacheable=true)    
    public static List<Account> getAccounts() {
        return [
            SELECT Name,Phone,Type,CreatedDate
            FROM Account
            ORDER BY  CreatedDate DESC
        ];
    }
    
}
