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
  sortDesc : boolean = false;

  constructor(private bugOperations : BugOperationsService) {
    
  }

  ngOnInit(): void {
    this.bugs = this.bugOperations.getAll();
  }

  onAddNewClick(){
    const newBug = this.bugOperations.createNew(this.newBugName);
    //this.bugs.push(newBug);
    this.bugs = [...this.bugs, newBug];
    
  }

  onBugNameClick(bugToToggle : Bug){
    const toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugOperations.remove(bugToRemove);
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }

  onRemoveClosedClick(){
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.onRemoveClick(closedBug))
  }

}
