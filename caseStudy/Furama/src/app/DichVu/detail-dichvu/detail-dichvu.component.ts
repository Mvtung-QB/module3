import { Component, OnInit } from '@angular/core';
import {Nhanvien} from '../../NhanVien/model/NhanVien';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhanvienService} from '../../NhanVien/service/nhanvien.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DichVu} from '../model/dichvu';
import {DichvuService} from '../service/dichvu.service';

@Component({
  selector: 'app-detail-dichvu',
  templateUrl: './detail-dichvu.component.html',
  styleUrls: ['./detail-dichvu.component.css']
})
export class DetailDichvuComponent implements OnInit {

  idDichVu: string;
  dichVu: DichVu;
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
      { type: 'pattern', message: 'Tuổi từ 18 đến 80 và có định dạng: đ/mm/yyyy ' }
    ]
  };
  ngOnInit() {
    this.idDichVu = this.route.snapshot.params.id;
    this.dichvuService.getDichVu(this.idDichVu).subscribe(data => this.dichVu = data);
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
  updateDichVu() {
    if (confirm('Do you want update Service? ')) {
      // @ts-ignore
      this.dichvuService.updateDichVu(this.dichVu.id, this.frRegiteNhanVien.value).subscribe();
      this.router.navigateByUrl('/app-DichVu');
    }
  }

}
