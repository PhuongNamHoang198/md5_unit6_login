import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
function authen(c: AbstractControl) {
  const v = c.value;
  return (v.password == '123456' && v.email == 'vantoan@gmail.com') ?
    null : {
      emailpasswordnotmatch: true
    };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup | undefined ;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: '',
      password: ''
    }, {validators : authen})
    // authen là hàm kiểm tra email và password có đúng hay không
  }

}
