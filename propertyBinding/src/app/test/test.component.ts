import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nec-test',
  template: `
            <h2>
              Wellcome {{ name }}
            </h2>
            <input type="text"
                   value="Antuan"
                   [id]="myId"
                   [disabled]="isDisabled">
            <input type="text"
                   value="Antuan"
                   id="{{myId}}"
                   disabled="{{false}}">
           `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Antuan';

  public myId = 'testId';

  public isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
