import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mydata: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(public _AuthService: AuthService, public _Router: Router) {}

  ngOnInit(): void {}

  getLoginData(data: any) {
    this._AuthService.sendLoginData(data.value).subscribe((data: any) => {
      if (data.message == 'success') {
        this._AuthService.saveUerData(data.user);

        // console.log(this._AuthService.user)
        this._Router.navigate(['/home']);
        // this._AuthService.user.next(data.user)
        // console.log(this._AuthService.user)
      }
    });
  }
}
