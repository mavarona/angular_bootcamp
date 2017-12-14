import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { Router,
         ActivatedRoute,
         Params } from '@angular/router';

@Component({
  selector: 'nec-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  public departments: Array<Department>;

  public selectedId: string;

    constructor(
      private _router: Router,
      private _activateRoute: ActivatedRoute
    ) { }

    ngOnInit() {

      this.seedDepartment();
      this._activateRoute.params
          .subscribe( (params: Params) => {
            this.selectedId = params.id;
          });

    }

    onSelect (department) {

      this._router.navigate(['/departments', department.id]);

    }

    getStyle ( department ) {
      return (department.id === this.selectedId) ? 'list-group-item list-group-item-info active' : 'list-group-item list-group-item-info' ;
    }


    private seedDepartment () {

      this.departments = [
        new Department(1, 'Angular'),
        new Department(2, 'React'),
        new Department(3, 'Vue'),
        new Department(4, 'Ember'),
        new Department(5, 'Meteor')
      ];

    }

}
