import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HopdongService} from '../service/hopdong.service';
import {HopDong} from '../model/hopdong';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-hopdong',
  templateUrl: './hopdong.component.html',
  styleUrls: ['./hopdong.component.css']
})
export class HopdongComponent implements OnInit {

  public keyword: string;
  lastDay = new Date();
  firstDay = new Date();
  p = 1;
  listHopDong: Array<HopDong>;
  constructor(private hopdongService: HopdongService,  private router: Router) { }
  // @ts-ignore
  gotoUpdate(id) {
    if (confirm('Do you want Delete Hop Dong? ')) {
      this.hopdongService.deleteHopDong(id).subscribe();
      alert('Success!');
    }
  }
  // @ts-ignore
  getCount(maHD) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listHopDong.length ; i++) {
      // tslint:disable-next-line:triple-equals
      if ( this.listHopDong[i].id == maHD) {
         this.firstDay = new Date(this.listHopDong[i].ngaylamhopdong);
         this.lastDay = new Date(this.listHopDong[i].ngayketthuc);
        // tslint:disable-next-line:no-unused-expression max-line-length
         const day = (new Date(this.lastDay).valueOf()  - new Date(this.firstDay).valueOf()) / (24 * 3600 * 1000);
         return day * this.listHopDong[i].dichvu.chiphithue;
      }
    }
  }
  seach() {
    // @ts-ignore
    this.hopdongService.seach(this.keyword).subscribe(data => {this.listHopDong = data; } ) ;
  }
  // @ts-ignore
  ngOnInit() {
    this.hopdongService.getAllHopDong().subscribe(data => {this.listHopDong = data; } );
  }
}
