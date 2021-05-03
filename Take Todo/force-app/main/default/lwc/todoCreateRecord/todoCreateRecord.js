import { LightningElement,track,wire } from 'lwc';
import createAccount from '@salesforce/apex/takeTodoCreateRecordController.createAccount';
import ACCOUNT_Name from '@salesforce/schema/Account.Name';
import ACCOUNT_Phone from '@salesforce/schema/Account.Phone';
import ACCOUNT_Type from '@salesforce/schema/Account.Type';
import getAccount from '@salesforce/apex/picklistHelper.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class TodoCreateRecord extends LightningElement {

    
    
    
    @track accountid;
    @track error;
    @track accountRecord = {
        Name:ACCOUNT_Name,
        Phone:ACCOUNT_Phone,
        Type:ACCOUNT_Type
    

    };
    accountOptionsList;
    selectedAccount;
    @wire(getAccount)
    retrieveAccount({error,data}){
        let tempArray = [];
        if(data){
            for(let key in data){
                tempArray.push({label:data[key],value:data[key]});
            }
        }
        this.accountOptionsList=tempArray;
    }
 //create different methods to hold value from template
    handleNameChange(event){
        this.accountRecord.Name = event.target.value;
    }

    handlePhoneChange(event){
        this.accountRecord.Phone = event.target.value;
    }

    handleTypeChange(event){
        this.selectedAccount = event.target.value;
        this.accountRecord.Type = this.selectedAccount
        
    }
    
 
   
    
    
    handleSaveAccount(){
        createAccount({accountRecObj:this.accountRecord})
            .then(result=>{
                this.accountRecord={};
                this.accountid= result.Id;
                const toastEvent = new ShowToastEvent({
                    title: "Todo created",
                    message: "Todo has been created sucessfully",
                    variant: "success"
            });
            this.dispatchEvent(toastEvent);
            
        })

        
             .catch(error=>{this.error=error.message});
    }

}