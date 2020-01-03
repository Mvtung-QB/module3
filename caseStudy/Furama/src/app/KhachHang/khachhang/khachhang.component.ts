import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Khachhang} from '../model/Khachhang';
import {KhachhangService} from '../service/khachhang.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit {
  public keyword: string;
  p = 1;

  listKhachHang: Array<Khachhang>;
  constructor(private khachhangService: KhachhangService,  private router: Router) { }
  // @ts-ignore
  gotoUpdate(id) {
    this.router.navigateByUrl('/xoa-KhachHang/' + id);
  }
  seach() {
    // @ts-ignore
    this.khachhangService.seach(this.keyword).subscribe(data => {this.listKhachHang = data; } ) ;
  }
  gotoDetail(id) {
    this.router.navigateByUrl('/detail-KhachHang/' + id);
    console.log(this.listKhachHang);
  }
  // @ts-ignore
  ngOnInit() {
    this.khachhangService.getAllKhachHang().subscribe(data => {this.listKhachHang = data; } );
    console.log(this.listKhachHang);
  }

}
