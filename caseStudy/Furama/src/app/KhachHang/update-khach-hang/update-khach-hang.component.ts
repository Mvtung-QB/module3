import { Component, OnInit } from '@angular/core';
import {KhachhangService} from '../service/khachhang.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Khachhang} from '../model/Khachhang';

@Component({
  selector: 'app-update-khach-hang',
  templateUrl: './update-khach-hang.component.html',
  styleUrls: ['./update-khach-hang.component.css']
})
export class UpdateKhachHangComponent implements OnInit {
  frRegiteNhanVien: FormGroup;
  // @ts-ignore
  idKhachHang: string;
  // @ts-ignore
  customer = new Khachhang();
  constructor(private khachHangService: KhachhangService, private router: Router, private route: ActivatedRoute) { }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    id: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: 'ex: KH-0001' }
    ],
    idloaikhach: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: '1 Ký tự số Lớn hơn 0' }
    ],
    email: [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng ex: vantung26@gmail.com' }
    ],
    hoten: [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    ngaysinh: [
      { type: 'required', message: 'Ngày Sinh không được để trống' },
      { type: 'pattern', message: 'Tuổi từ 18 đến 80 và có định dạng: đ/mm/yyyy ' }
    ],
    sodt: [
      { type: 'required', message: 'số điện thoại không được để trống' },
      { type: 'pattern', message: '090xxxxxxx hoặc 091xxxxxxx hoặc (+84)90xxxxxxx hoặc (+84)91xxxxxxx ' }
    ],
    socmnd: [
      { type: 'required', message: 'Số cmnd không được để trống' },
      { type: 'pattern', message: '9 chữ số hoặc 12 chữ số' }
    ],
    diachi: [
      { type: 'required', message: 'Địa chỉ không được để trống' }
    ]
  };
  ngOnInit() {
    this.idKhachHang = this.route.snapshot.params.id;
    this.khachHangService.getKhachHang(this.idKhachHang).subscribe(data => this.customer = data);
    this.frRegiteNhanVien = new FormGroup({
      // tslint:disable-next-line:max-line-length
      id: new FormControl('', [Validators.required, Validators.pattern(/^KH-[0-9]{4}$/)]),
      idloaikhach: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]$/)]),
      hoten: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')]),
      // tslint:disable-next-line:max-line-length
      ngaysinh: new FormControl('', [Validators.required, Validators.pattern(/^(19[4-9][0-9]|2001|2000)\-((0[1-9])|([1-2][0-9])|(3[0-1]))\-(0[1-9]|1[0-2])$/)]),
      sodt: new FormControl('', [Validators.required, Validators.pattern(/^090[0-9]{7}|091[0-9]{7}|\+8491[0-9]{7}|\+8490[0-9]{7}$/)]),
      diachi: new FormControl('', [Validators.required]),
      socmnd: new FormControl('', [Validators.required, Validators.pattern(/^([\d]{9}|[\d]{12})$/)])
    });
  }
  updateKhachHang() {
    if (confirm('Do you want update Customer? ')) {
      // @ts-ignore
      this.khachHangService.updateKhachHang(this.idKhachHang, this.frRegiteNhanVien.value).subscribe( );
      this.router.navigateByUrl('/app-KhachHang');
    }
  }
}
