import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from "../../models/Bug";
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
  selector : 'app-bug-edit',
  template : `
    <form #bugForm="ngForm">
        <span>Form is Invalid : {{bugForm.invalid}}</span>
        
        <section class="edit">
            <label for="">Bug Name :</label>
            <input 
                required 
                name="bugName" 
                #bugName="ngModel" 
                type="text" 
                [(ngModel)]="newBugName"
                [ngClass]="{errorInput : bugName.touched && bugName.invalid}"    
            >
            <div class="errorMessage" *ngIf="bugName.touched && bugName.invalid">
                Bug Name is mandatory!
            </div>
            <hr/>
            <div>
                <div>Touched : {{bugName.touched}} </div>
                <div>Untouched : {{bugName.untouched}} </div>
                <div>Pristine : {{bugName.pristine}} </div>
                <div>Dirty : {{bugName.dirty}} </div>
                <div>valid : {{bugName.valid}} </div>
                <div>Invalid : {{bugName.invalid}} </div>
            </div>
            <hr/>
            <input 
                type="button" 
                value="Add New" (click)="onAddNewClick()"
                [disabled]="bugForm.invalid"
            >
        </section>
    </form>
  `,
  styleUrls : ['./bug-edit.component.css']
})
export class BugEditComponent{

    newBugName : string = '';

    @Output()
    created : EventEmitter<Bug> = new EventEmitter<Bug>();
    
    constructor(private bugOperations : BugOperationsService){

    }

    //using the bugStorage service (synchronous)
    /* onAddNewClick(){
        const newBug = this.bugOperations.createNew(this.newBugName);
        this.created.emit(newBug);
    } */

    //using the bugApi service (asynchronous)
    onAddNewClick(){
        this.bugOperations
            .createNew(this.newBugName)
            .subscribe(newBug => {
                this.created.emit(newBug);
            });
        
    }

}