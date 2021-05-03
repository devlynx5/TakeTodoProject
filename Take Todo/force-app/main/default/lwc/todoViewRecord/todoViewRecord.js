import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import TYPE_Field from '@salesforce/schema/Account.Type';
import CreatedDate_Field from '@salesforce/schema/Account.CreatedDate';
import getAccounts from '@salesforce/apex/todoAccountViewController.getAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Phone ', fieldName: Phone_FIELD.fieldApiName, type: 'text' },
    { label: 'Type',fieldName: TYPE_Field.fieldApiName, type: 'text' },
    { label: 'Created Date', fieldName: CreatedDate_Field.fieldApiName, type: 'Date/Time' }
];

export default class TodoViewRecord extends LightningElement {

    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
}