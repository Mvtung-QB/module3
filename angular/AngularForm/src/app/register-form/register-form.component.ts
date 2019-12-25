import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  frRegiteCustomer: FormGroup;
  constructor(private fb: FormBuilder) { }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    userName: [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    password: [
      { type: 'required', message: 'Mật khẩu không được để trống' },
      { type: 'pattern', message: 'Mật khẩu chứa ký tự không hợp lệ hoặc chưa đủ 6 kí tự ' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Mật khẩu không được để trống' },
      { type: 'pattern', message: 'Mật khẩu chứa ký tự không hợp lệ hoặc chưa đủ 6 kí tự ' }
    ],
    email: [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng ex: vantung26@gmail.com' }
    ]
  };

  ngOnInit() {
    this.frRegiteCustomer = new FormGroup({
      // tslint:disable-next-line:max-line-length
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z]{6,}$')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z]{6,}$')])
    });
  }
  onSubmit() {
    alert('Xong');
  }
}
