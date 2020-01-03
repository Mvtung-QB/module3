import { Component, OnInit } from '@angular/core';
import {NhanvienService} from '../service/nhanvien.service';
import {Nhanvien} from '../model/NhanVien';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {

  listNhanVien: Array<Nhanvien>;
  constructor(private nhanvienService: NhanvienService,  private router: Router) { }
  // @ts-ignore
  gotoUpdate(id) {
    this.router.navigateByUrl('/xoa-NhanVien/' + id);
  }
  gotoDetail(id) {
    this.router.navigateByUrl('/detail-NhanVien/' + id);
  }
  // @ts-ignore
  ngOnInit() {
    this.nhanvienService.getAllNhanVien().subscribe(data => {this.listNhanVien = data; } );
  }
}
