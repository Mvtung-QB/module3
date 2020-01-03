import { Component, OnInit } from '@angular/core';
import {NhanvienService} from '../service/nhanvien.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Nhanvien} from '../model/NhanVien';

@Component({
  selector: 'app-xoa-nhan-vien',
  templateUrl: './xoa-nhan-vien.component.html',
  styleUrls: ['./xoa-nhan-vien.component.css']
})
export class XoaNhanVienComponent implements OnInit {
  idnhanvien: string;
  nhanVien: Nhanvien;
  constructor( private nhanvienService: NhanvienService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idnhanvien = this.route.snapshot.params.id;
    this.nhanvienService.getNhanVien(this.idnhanvien).subscribe(data => this.nhanVien = data);
  }

  deleteNhanVien() {
    if (confirm('Do you want delete Employee? ')) {
      this.nhanvienService.deleteNhanVien(this.idnhanvien).subscribe();
      this.router.navigateByUrl('/app-NhanVien');
    }
  }

}
