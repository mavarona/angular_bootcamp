import { Component } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name = 'Dale Pedales';

  public dateNow: Date = new Date();

  public numbers: Array<number> = [2, 44, 66, 7, 23, 67, 102, 9];

  public PI = Math.PI;

  public valPercent = 0.357;

  public amount = 1234.5;

  public user = {
    name: 'Antuan',
    age: 49,
    phone: 678900976,
    address: {
      street: 'Anabel segura 7',
      code: 28009
    }
  };

  public dataAsync = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('the async data'), 3500);
  });

  public message = 'dALE pEdAles TABales';

  public video = 'pOsU9WvVXVw';

}
