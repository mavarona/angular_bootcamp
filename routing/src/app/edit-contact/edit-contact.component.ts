import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nec-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public id: string;

  constructor(
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this._activateRoute.snapshot.params.id;
    console.log(this.id);

  }

}
