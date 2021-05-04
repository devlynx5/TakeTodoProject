import { LightningElement,track,wire } from 'lwc';
import Todo_Name from '@salesforce/schema/Account.Name';
import Todo_Phone from '@salesforce/schema/Account.Phone';
import Todo_Type from '@salesforce/schema/Account.Type';
import createTodo from '@salesforce/apex/takeTodoCreateRecordController.createTodo';
import getTodoType from '@salesforce/apex/takeTodoPicklistHelper.getTodoType';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//Imports the necessary schema data as well as apex classes to be called
export default class TakeTodoCreateRecord extends LightningElement {

    //variables to be used to pass data later on in the app
    todoOptionsList;
    selectedTodo;
    @track todoid;
    @track error;
    @track todoRecord = {
        Name:Todo_Name,
        Phone:Todo_Phone,
        Type:Todo_Type
    
    };

    //invokes the apex class to get the list of picklist fileds, get the key and id, loops through set and only brings back they key which is what would be needed to store in the database
    @wire(getTodoType)
    retrieveTodo({error,data}){
        let tempArray = [];
        if(data){
            for(let key in data){
                tempArray.push({label:data[key],value:data[key]});
            }
        }
        this.todoOptionsList=tempArray;
    }
 //create different methods to hold value from template
    handleNameChange(event){
        this.todoRecord.Name = event.target.value;
    }

    handlePhoneChange(event){
        this.todoRecord.Phone = event.target.value;
    }

    handleTypeChange(event){
        this.selectedtodo = event.target.value;
        this.todoRecord.Type = this.selectedtodo
        
    }
    
 
   
    
    // Handles the actual Save function, takes the todoRecord variable and pushes data into Database to be stored, shows success message upon completion
    handleSaveTodo(){
        createTodo({todoRecObj:this.todoRecord})
            .then(result=>{
                this.todoRecord={};
                this.todoid= result.Id;
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


