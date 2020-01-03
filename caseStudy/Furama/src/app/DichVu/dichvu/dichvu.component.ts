import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DichvuService} from '../service/dichvu.service';
import {DichVu} from '../model/dichvu';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.css']
})
export class DichvuComponent implements OnInit {
  public keyword: string;
  p = 1;

  listDichVu: Array<DichVu>;
  constructor(private dichvuService: DichvuService,  private router: Router) { }
  // @ts-ignore
  gotoUpdate(id) {
    if (confirm('Do you want Delete Service? ')) {
      this.dichvuService.deleteDichVu(id).subscribe();
      alert('Success!');
    }
  }
  seach() {
    // @ts-ignore
    this.dichvuService.seach(this.keyword).subscribe(data => {this.listDichVu = data; } ) ;
  }
  gotoDetail(id) {
    this.router.navigateByUrl('/detail-DichVu/' + id);
  }
  // @ts-ignore
  ngOnInit() {
    this.dichvuService.getAllDichVu().subscribe(data => {this.listDichVu = data; } );
  }

}
