import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugs : string[] = [];
  newBug : string = '';


  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(){
    this.bugs.push(this.newBug);
  }

  onRemoveClick(bugToRemove : string){
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }
}
