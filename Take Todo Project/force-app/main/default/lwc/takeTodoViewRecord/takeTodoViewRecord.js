import { LightningElement, wire,track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import TYPE_Field from '@salesforce/schema/Account.Type';
import CreatedDate_Field from '@salesforce/schema/Account.CreatedDate';
import gettodo from '@salesforce/apex/takeTodoViewRecordController.gettodo';
import { refreshApex } from '@salesforce/apex';
const COLUMNS = [
    { label: 'Todo  Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Phone ', fieldName: Phone_FIELD.fieldApiName, type: 'text' },
    { label: 'Type',fieldName: TYPE_Field.fieldApiName, type: 'text' },
    { label: 'Created Date', fieldName: CreatedDate_Field.fieldApiName, type: 'Date/Time' }
];

export default class TakeTodoViewRecord extends LightningElement {

    
     columns = COLUMNS;
    @wire(gettodo)
    Todo;

    
}