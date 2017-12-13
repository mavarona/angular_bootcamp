import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nec-child',
  template: `<div>
              child inline template
            </div>
  `,
  styles: [`
      div {
        color: blue;
      }
  `]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
