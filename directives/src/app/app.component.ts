import { Component } from '@angular/core';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nec';

  public name = 'Antuan';

  public displayName = true;

  public displayCondition = true;

  public color = 'green';

  public names: Array<string> = new Array<string>('Antuan', 'Trump', 'Nemo');

}
