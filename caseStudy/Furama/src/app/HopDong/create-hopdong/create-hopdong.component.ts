import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HopdongService} from '../service/hopdong.service';
import {ActivatedRoute, Router} from '@angular/router';
import {KhachhangService} from '../../KhachHang/service/khachhang.service';
import {DichvuService} from '../../DichVu/service/dichvu.service';
import {DichVu} from '../../DichVu/model/dichvu';
import {Khachhang} from '../../KhachHang/model/Khachhang';

@Component({
  selector: 'app-create-hopdong',
  templateUrl: './create-hopdong.component.html',
  styleUrls: ['./create-hopdong.component.css']
})
export class CreateHopdongComponent implements OnInit {
  frRegiteNhanVien: FormGroup;
  listDichVu: Array<DichVu>;
  listKhachHang: Array<Khachhang>;
  // @ts-ignore
  frRegiteNhanVien: FormGroup;
  constructor(
    private hopdongService: HopdongService,
    private router: Router ,
    private route: ActivatedRoute,
    private khachhangService: KhachhangService,
    private dichvuService: DichvuService
  ) { }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    id: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: 'ex: HD-0110' }
    ],
    ngaylamhopdong: [
      { type: 'required', message: 'Ngày làm hợp đồng không được để trống' },
      { type: 'pattern', message: ' năm lớn hơn 1949 và có định dạng: dd/mm/yyyy' }
    ],
    ngayketthuc: [
      { type: 'required', message: 'Ngày kết thúc không được để trống' },
      { type: 'pattern', message: 'năm lớn hơn 1949 và có định dạng: dd/mm/yyyy' }
    ],
    tiendatcoc: [
      { type: 'required', message: 'Tiền cọc không được để trống' },
      { type: 'pattern', message: 'Ít nhất 500000 và ko điền số 0 đầu tiên' }
    ]
  };
  ngOnInit() {
    this.khachhangService.getAllKhachHang().subscribe(data => {
      this.listKhachHang = data;
    });
    this.dichvuService.getAllDichVu().subscribe(data => {
      this.listDichVu = data;
    });
    this.frRegiteNhanVien = new FormGroup({
      // tslint:disable-next-line:max-line-length
      id: new FormControl('', [Validators.required, Validators.pattern(/^HD-[0-9]{4}$/)]),
      // tslint:disable-next-line:max-line-length
      ngaylamhopdong: new FormControl('', [Validators.required, Validators.pattern(/^(19[4-9][0-9]|201[0-9]|200[0-9])\-(0[1-9]|1[0-2])\-((0[1-9])|([1-2][0-9])|(3[0-1]))$/)]),
      // tslint:disable-next-line:max-line-length
      ngayketthuc: new FormControl('', [Validators.required, Validators.pattern(/^(19[4-9][0-9]|201[0-9]|200[0-9])\-(0[1-9]|1[0-2])\-((0[1-9])|([1-2][0-9])|(3[0-1]))$/)]),
      tiendatcoc: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{5,}$/)]),
      khachhang: new FormControl(''),
      dichvu: new FormControl('')
    });
  }
  createHopDong() {
    if (this.frRegiteNhanVien.valid) {
      this.hopdongService.createHopDong(this.frRegiteNhanVien.value).subscribe(data => {
        this.router.navigateByUrl('/app-HopDong');
      });
      alert('sucess!');
    }
  }

}
