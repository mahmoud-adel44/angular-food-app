import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  user = new BehaviorSubject(null)

  saveUerData(data)
  {
        this.user.next(data)
  }

  sendRgisterData(data)
  {
   return this._HttpClient.post("http://routeegypt.herokuapp.com/signup", data)
   // console.log(data)
  }

  sendLoginData(data)
  {
   // this.user.next(data)

    return this._HttpClient.post("http://routeegypt.herokuapp.com/signin", data)

  }
}
