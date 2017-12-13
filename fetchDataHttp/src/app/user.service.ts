import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private urlGetUsers = environment.urlGetUser;

  constructor(
    private _http: Http
  ) { }

  getUsers () {

    return this._http.get( this.urlGetUsers )
               .map((response: Response) => response.json());

  }

}
