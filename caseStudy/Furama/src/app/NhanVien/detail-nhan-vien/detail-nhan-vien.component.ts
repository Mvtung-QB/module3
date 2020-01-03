import { Component, OnInit } from '@angular/core';
import {NhanvienService} from '../service/nhanvien.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Nhanvien} from '../model/NhanVien';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-nhan-vien',
  templateUrl: './detail-nhan-vien.component.html',
  styleUrls: ['./detail-nhan-vien.component.css']
})
export class DetailNhanVienComponent implements OnInit {

  idnhanvien: string;
  nhanVien: Nhanvien;
  frRegiteNhanVien: FormGroup;
  // tslint:disable-next-line:adjacent-overload-signatures
  // @ts-ignore
  constructor(private nhanvienService: NhanvienService, private router: Router , private route: ActivatedRoute) { }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    id: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: 'ex: NV-010' }
    ],
    idtrinhdo: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: '1 Ký tự số' }
    ],
    idbophan: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: '1 Ký tự số ' }
    ],
    idvitri: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: '1 Ký tự số ' }
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
    luong: [
      { type: 'required', message: 'Lương không được để trống' },
      { type: 'pattern', message: 'Từ 0 đến 99999999' }
    ],
    diachi: [
      { type: 'required', message: 'Địa chỉ không được để trống' }
    ]
  };
  ngOnInit() {
    this.idnhanvien = this.route.snapshot.params.id;
    this.nhanvienService.getNhanVien(this.idnhanvien).subscribe(data => this.nhanVien = data);
    this.frRegiteNhanVien = new FormGroup({
      // tslint:disable-next-line:max-line-length
      id: new FormControl('', [Validators.required, Validators.pattern(/^NV-[0-9]{3}$/)]),
      idbophan: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]$/)]),
      idvitri: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]$/)]),
      idtrinhdo: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]$/)]),
      hoten: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@(.+)$')]),
      // tslint:disable-next-line:max-line-length
      ngaysinh: new FormControl('', [Validators.required, Validators.pattern(/^(19[4-9][0-9]|2001|2000)\-(0[1-9]|1[0-2])\-((0[1-9])|([1-2][0-9])|(3[0-1]))$/)]),
      // tslint:disable-next-line:max-line-length
      sodt: new FormControl('', [Validators.required, Validators.pattern(/^(090[0-9]{7})|(091[0-9]{7})|(\+8491[0-9]{7})|(\+8490[0-9]{7})$/)]),
      luong: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,8}$/)]),
      diachi: new FormControl('', [Validators.required]),
      socmnd: new FormControl('', [Validators.required, Validators.pattern(/^([\d]{9}|[\d]{12})$/)])
    });
  }
  updateNhanVien() {
    if (confirm('Do you want update Employee? ')) {
      // @ts-ignore
      this.nhanvienService.updateNhanVien(this.idnhanvien, this.frRegiteNhanVien.value).subscribe();
      this.router.navigateByUrl('/app-NhanVien');
    }
  }

}
