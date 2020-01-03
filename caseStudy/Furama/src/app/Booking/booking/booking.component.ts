import { Component, OnInit } from '@angular/core';
import {BookingService} from '../service/booking.service';
// @ts-ignore
import {Booking} from '../model/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public keyword: string;
  p = 1;
  isShowForm = false;
  constructor(
    private bookingService: BookingService
  ) {
  }
  // @ts-ignore
  listBooking: Array<any>;

  ngOnInit() {
    this.bookingService.getAllBooking().subscribe(data => {
      this.listBooking = data;
    });
   }
}
