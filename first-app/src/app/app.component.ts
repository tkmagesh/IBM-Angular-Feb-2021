import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* presentation */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* state */
  title = 'first-app';

  constructor(){
    setTimeout(() =>{ 
      this.title = 'Expense Management'
    }, 10000);
  }

  //NO UI BEHAVIOR

}
