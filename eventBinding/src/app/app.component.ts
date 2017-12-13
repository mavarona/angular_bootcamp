import { Component } from '@angular/core';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'nec';

  public message = '';

  public eventType = '';

  greet() {
    console.log('Event binding');
    this.message = 'New message in the DOM';
  }

  onClick(event) {
    console.log(event);
    this.eventType = event.type;
  }

}
