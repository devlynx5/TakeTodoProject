public with sharing class todoAccountCreationController {
    public todoAccountCreationController() {

    }
    @AuraEnabled
    public static Account createAccount(Account accountRecObj){
        
        try {
            //inserts and create record
            insert accountRecObj;
            return accountRecObj;
            
        } 
        catch (Exception ex) {
            // error thrown
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
