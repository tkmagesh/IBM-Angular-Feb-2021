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

  

  sortAttr : string = '';
  sortDesc : boolean = false;

  //using the bugApi service (asynchronous)

  constructor(private bugOperations : BugOperationsService) {
    
  }

  ngOnInit(): void {
    this.bugOperations
      .getAll()
      .subscribe(bugs => this.bugs = bugs);
  }

  onNewBugCreated(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations
      .toggle(bugToToggle)
      .subscribe(toggledBug => {
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
      })
    
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugOperations
      .remove(bugToRemove)
      .subscribe(() => {
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
      })
    
  }

  onRemoveClosedClick(){
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.onRemoveClick(closedBug))
  }

  ////////////////////////////////////////////////////////////////

  //using the bugStorage service (synchronous)
  /* constructor(private bugOperations : BugOperationsService) {
    
  }

  ngOnInit(): void {
    this.bugs = this.bugOperations.getAll();
  }

  onNewBugCreated(newBug : Bug){
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
  } */

}
