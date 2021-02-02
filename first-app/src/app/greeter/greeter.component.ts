import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  userName : string = '';
  message : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnGreetClick(){
    this.message = `Hi ${this.userName}, Have a nice day!`;
  }

}
