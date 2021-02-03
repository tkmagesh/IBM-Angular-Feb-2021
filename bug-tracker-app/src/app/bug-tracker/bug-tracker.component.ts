import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css', ]
})
export class BugTrackerComponent implements OnInit {

  bugs : Bug[] = [];

  newBugName : string = '';

  sortAttr : string = '';
  

  constructor(private bugOperations : BugOperationsService) {

  }

  ngOnInit(): void {
    this.bugs.push({ id : 3, name : 'Server communication failure', isClosed : true, createdAt : new Date('01-Jan-2021')})
    this.bugs.push({ id : 2, name : 'Data Integrity checks failed', isClosed : true, createdAt : new Date('01-Feb-2021')})
    this.bugs.push({ id : 4, name : 'Application not responding', isClosed : false, createdAt : new Date('01-Jan-2020')})
    this.bugs.push({ id : 1, name : 'User unable to login', isClosed : false, createdAt : new Date('01-Mar-2020')})
  }

  onAddNewClick(){
    const newBug = this.bugOperations.createNew(this.newBugName);
    this.bugs.push(newBug);
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle);
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }

  onRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
  }
}
