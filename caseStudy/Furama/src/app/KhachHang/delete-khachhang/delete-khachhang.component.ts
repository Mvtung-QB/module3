import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KhachhangService} from '../service/khachhang.service';
import {Khachhang} from '../model/Khachhang';

@Component({
  selector: 'app-delete-khachhang',
  templateUrl: './delete-khachhang.component.html',
  styleUrls: ['./delete-khachhang.component.css']
})
export class DeleteKhachhangComponent implements OnInit {
  idKhachHang: string;
  khachHang: Khachhang;
  constructor( private khachhangService: KhachhangService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idKhachHang = this.route.snapshot.params.id;
    this.khachhangService.getKhachHang(this.idKhachHang).subscribe(data => this.khachHang = data);
  }
  deleteKhachHang() {
    if (confirm('Do you want delete Customer? ')) {
      this.khachhangService.deleteKhachHang(this.idKhachHang).subscribe();
      this.router.navigateByUrl('/app-KhachHang');
    }
  }
}
