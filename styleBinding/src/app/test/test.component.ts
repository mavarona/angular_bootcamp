import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nec-test',
  template: `
              <h2>
                Wellcome {{ name }}
              </h2>
              <h2 [style.color]="'orange'">Style binding</h2>
              <h2 [style.color]="hasError ? 'red' : 'blue'">Style binding</h2>
              <h2 [ngStyle]="titleStyle">Style binding</h2>
            `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Trump';

  public hasError = true;

  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

}
