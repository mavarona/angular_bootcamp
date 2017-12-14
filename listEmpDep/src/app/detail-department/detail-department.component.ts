import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  templateUrl: './detail-department.component.html'
})
export class DetailDepartmentComponent implements OnInit {

  public departmentId: string;

  constructor(
    private _activatRoute: ActivatedRoute,
    private _router: Router
  ) { }

  /*ngOnInit() {

    this.departmentId = this._activatRoute.snapshot.params['id'];

  }*/

  ngOnInit() {

    this._activatRoute.params
        .subscribe( (params: Params) => {
          this.departmentId = params['id'];
        });

  }

  goPrevious () {

    const previousId = Number(this.departmentId) - 1;
    this._router.navigate(['/departments', previousId]);

  }

  goNext () {

    const nextId = Number(this.departmentId) + 1;
    this._router.navigate(['/departments', nextId]);

  }

  backToDepartments () {

    const selectedId = this.departmentId ? this.departmentId : null;
    this._router.navigate(['/departments', {id: selectedId}]);

  }

}
