import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugs : Bug[] = [];

  newBugName : string = '';

  private currentBugId : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(){
    const newBug : Bug = {
      id : ++this.currentBugId,
      name : this.newBugName,
      isClosed : false,
      createdAt : new Date()
    };

    this.bugs.push(newBug);
  }

  onBugNameClick(bugToToggle : Bug){
    bugToToggle.isClosed = !bugToToggle.isClosed;
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
