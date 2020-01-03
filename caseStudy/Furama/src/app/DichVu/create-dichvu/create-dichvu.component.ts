import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DichvuService} from '../service/dichvu.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-dichvu',
  templateUrl: './create-dichvu.component.html',
  styleUrls: ['./create-dichvu.component.css']
})
export class CreateDichvuComponent implements OnInit {
  frRegiteNhanVien: FormGroup;
  // tslint:disable-next-line:adjacent-overload-signatures
  // @ts-ignore
  constructor(private dichvuService: DichvuService, private router: Router , private route: ActivatedRoute) { }
  // tslint:disable-next-line:variable-name
  validation_messages = {
    id: [
      { type: 'required', message: 'ID không được để trống' },
      { type: 'pattern', message: 'ex: DV-010' }
    ],
    tendichvu: [
      { type: 'required', message: 'Tên Dịch vụ không được để trống' }
    ],
    dientich: [
      { type: 'required', message: 'Diện tích không được để trống' },
      { type: 'pattern', message: 'Lớn hơn 0 và nhỏ hơn 9999' }
    ],
    sotang: [
      { type: 'required', message: 'Số Tầng không được để trống' },
      { type: 'pattern', message: 'Lớn hơn 0 và nhỏ hơn 99' }
    ],
    songuoitoida: [
      { type: 'required', message: 'Số người tối đa không được để trống' },
      { type: 'pattern', message: 'Lớn hơn 0 và nhỏ hơn 99' }
    ],
    chiphithue: [
      { type: 'required', message: 'Chi phí thuê không được để trống' },
      { type: 'pattern', message: 'Chi phí thuê Từ 1000000 VND dến 999999999 VND' }
    ],
    trangthai: [
      { type: 'required', message: 'Trạng thái không được để trống' },
      // { type: 'pattern', message: 'Tuổi từ 18 đến 80 và có định dạng: đ/mm/yyyy ' }
    ]
  };
  ngOnInit() {
    this.frRegiteNhanVien = new FormGroup({
      // tslint:disable-next-line:max-line-length
      id: new FormControl('', [Validators.required, Validators.pattern(/^DV-[0-9]{3}$/)]),
      tendichvu: new FormControl('', [Validators.required]),
      dientich: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1,4}$/)]),
      sotang: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1,2}$/)]),
      songuoitoida: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1,2}$/)]),
      chiphithue: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{7,9}$')]),
      // tslint:disable-next-line:max-line-length
      trangthai: new FormControl('', [Validators.required]),
    });
  }
  createDichVu() {
    if (this.frRegiteNhanVien.valid) {
      this.dichvuService.createDichVu(this.frRegiteNhanVien.value).subscribe(data => {
        this.router.navigateByUrl('/app-DichVu');
      });
      alert('sucess!');
    }
  }
}
