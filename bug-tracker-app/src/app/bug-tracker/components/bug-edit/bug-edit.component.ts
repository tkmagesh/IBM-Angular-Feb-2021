import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from "../../models/Bug";
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
  selector : 'app-bug-edit',
  template : `
    <section class="edit">
        <label for="">Bug Name :</label>
        <input type="text" [(ngModel)]="newBugName">
        <input type="button" value="Add New" (click)="onAddNewClick()">
    </section>
  `,
  styleUrls : ['./bug-edit.component.css']
})
export class BugEditComponent{

    newBugName : string = '';

    @Output()
    created : EventEmitter<Bug> = new EventEmitter<Bug>();
    
    constructor(private bugOperations : BugOperationsService){

    }

    onAddNewClick(){
        const newBug = this.bugOperations.createNew(this.newBugName);
        this.created.emit(newBug);
    }

}