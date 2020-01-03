import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HopdongService} from '../service/hopdong.service';
import {HopDong} from '../model/hopdong';

@Component({
  selector: 'app-hopdong',
  templateUrl: './hopdong.component.html',
  styleUrls: ['./hopdong.component.css']
})
export class HopdongComponent implements OnInit {

  public keyword: string;
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
  seach() {
    // @ts-ignore
    this.hopdongService.seach(this.keyword).subscribe(data => {this.listHopDong = data; } ) ;
  }
  // @ts-ignore
  ngOnInit() {
    this.hopdongService.getAllHopDong().subscribe(data => {this.listHopDong = data; } );
  }
}
