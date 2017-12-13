import { Component,
         OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         FormBuilder,
         Validators } from '@angular/forms';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styles: [`input.ng-invalid {border-left: 5px solid red;}
            input.ng-valid {border-left: 5px solid green;}
          `]
})
export class AppComponent implements OnInit {

  userForm: FormGroup;

  constructor ( private _formBuilder: FormBuilder ) {}

  ngOnInit () {

    this.userForm = this._formBuilder.group({
      name: ['Antuan', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalcode: [null, [Validators.pattern('^[0-9][1-9]{4}$')]
      })
    });

  }

  /*userForm = new FormGroup({
    name: new FormControl('Antuan', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null, Validators.pattern('^[0-9][1-9]{4}$'))
    })
  });*/

  onSubmit () {

    console.log( this.userForm.value );

  }

}
