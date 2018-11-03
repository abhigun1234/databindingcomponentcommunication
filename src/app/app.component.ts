import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage="hi how are you"
  parentMessage1="bye"
  
  childmessage=""
  title = 'datatransbetweencomponent';
  public receiveMessage($event)
  {
    this.childmessage=$event
  alert(this.childmessage)
  }
}
