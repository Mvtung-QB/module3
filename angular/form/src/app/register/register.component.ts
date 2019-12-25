import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    country: [
      { type: 'required', message: 'Country không được để trống' }
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
    ],
    phone: [
      { type: 'required', message: 'Phone không được để trống' },
      { type: 'pattern', message: 'Phone bắt đầu với +84, và theo sau là 9 đến 10 chữ số ' }
    ],
    gender: [
      { type: 'required', message: 'gender không được để trống' }
    ],
    age: [
      { type: 'required', message: 'Tuổi không được để trống' },
      { type: 'pattern', message: 'Tuổi lớn hơn 18 và nhỏ hơn 79' }
    ]
  };
  ngOnInit() {
    // @ts-ignore
    this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9+_.-]+@(.+)$/)]],
        country: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.pattern(/^1[8-9]|[2-7][0-9]{2}&/)]],
        phone: ['', [Validators.required, Validators.pattern(/^[\+84](\d{9,10})$/)]],
        gender: ['', [Validators.required, Validators.pattern(/^Male$/)]],
        pwGroup: this.fb.group({
        password: ['', ([Validators.required, Validators.pattern(/^[a-z0-9A-Z!@#%&*]{6,}$/)])],
        confirmPassword: ['', [Validators.required, Validators.pattern(/^[a-z0-9A-Z!@#%&*]{6,}$/)]]
      }, {validator: comparePassword})
    });

    // update form state
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
  onSubmit() {}
}
