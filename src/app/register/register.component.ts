import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myform: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.max(8),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.max(8),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  constructor(public _AuthService: AuthService, public _Router: Router) {}

  getData(data: any) {
    this._AuthService.sendRgisterData(data.value).subscribe((data: any) => {
      if (data.message == 'success') {
        this._Router.navigate(['/login']);
      }
    });
  }

  ngOnInit(): void {}
}
