import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nec-test',
  template: `
              <h2>
                Wellcome {{ name }}
              </h2>
              <h2 class="text-success">Text with styles</h2>
              <h2 [class]="successClass">Text with styles</h2>
              <h2 class="text-special" [class]="successClass">Text with styles</h2>
              <h2 [class.text-danger]="hasError">Text with styles</h2>
              <h2 [ngClass]="messageClass">Text with styles</h2>
            `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Trump';

  public successClass = 'text-success';

  public hasError = true;

  public isSpecial = true;

  public messageClass = {
   'text-success': !this.hasError,
   'text-danger': this.hasError,
   'text-special': this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

}
