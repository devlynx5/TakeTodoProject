public with sharing class takeTodoPicklistHelper {
    public takeTodoPicklistHelper() {

    }
    // uses a search query to find the type and id of picklist field
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getTodoType(){
       // gethe the Object and the field for picklist
String objectName = 'Account';
String fieldName ='Type';

// creates a map to store dymanic picklist values from Salesfoce
Map<String,String> AccountMap = new Map<String,String>();
Schema.SObjectType s = Schema.getGlobalDescribe().get(objectName) ;
Schema.DescribeSObjectResult r = s.getDescribe() ;
Map<String,Schema.SObjectField> fields = r.fields.getMap() ;
Schema.DescribeFieldResult fieldResult = fields.get(fieldName).getDescribe();
List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
for( Schema.PicklistEntry pickListVal : ple){
    System.debug(pickListVal.getLabel() +' '+pickListVal.getValue());
//stores values in map against the label and value
    AccountMap.put(pickListVal.getLabel(),pickListVal.getValue());
}   
      return AccountMap;
}

}
