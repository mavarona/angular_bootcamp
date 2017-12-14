import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private _router: Router
  ) {}

  gotoAbout() {

    this._router.navigate(['/about']);

  }

  goEditContact() {

    this._router.navigate(['/editContact', '45']);

  }


}
