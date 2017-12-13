import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nec-child',
  template: `
    <h2>Wellcome {{ name }}</h2>
    <h2>{{3+5}}</h2>
    <h2>{{"wellcome" + name}}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greet() }}</h2>
    <!--<h2>{{window.location.href}}</h2> -->
    <h2>{{ urlLocation }}</h2>
`,
  styles: []
})
export class ChildComponent implements OnInit {

  public name = 'Antuan';

  public urlLocation = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greet() {
    return this.name;
  }

}
