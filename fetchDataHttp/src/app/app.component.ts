import { Component,
         OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'nec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users: Array<User>;

  constructor (
    private _userService: UserService
  ) { }

  ngOnInit () {
    this._userService.getUsers()
        .subscribe ( users => {
          this.users = users;
          console.log (this.users);
        });
  }

}
