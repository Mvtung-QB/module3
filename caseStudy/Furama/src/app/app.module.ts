import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NhanvienComponent } from './NhanVien/nhanvien/nhanvien.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ThemNhanVienComponent } from './NhanVien/them-nhan-vien/them-nhan-vien.component';
import { XoaNhanVienComponent } from './NhanVien/xoa-nhan-vien/xoa-nhan-vien.component';
import {DetailNhanVienComponent} from './NhanVien/detail-nhan-vien/detail-nhan-vien.component';
import { UpdateKhachHangComponent } from './KhachHang/update-khach-hang/update-khach-hang.component';
import { KhachhangComponent } from './KhachHang/khachhang/khachhang.component';
import { DeleteKhachhangComponent } from './KhachHang/delete-khachhang/delete-khachhang.component';
import { CreateKhachhangComponent } from './KhachHang/create-khachhang/create-khachhang.component';
import { DichvuComponent } from './DichVu/dichvu/dichvu.component';
import { CreateDichvuComponent } from './DichVu/create-dichvu/create-dichvu.component';
import { DeleteDichvuComponent } from './DichVu/delete-dichvu/delete-dichvu.component';
import { DetailDichvuComponent } from './DichVu/detail-dichvu/detail-dichvu.component';
import { HopdongComponent } from './HopDong/hopdong/hopdong.component';
import { CreateHopdongComponent } from './HopDong/create-hopdong/create-hopdong.component';
import { BookingComponent } from './Booking/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    NhanvienComponent,
    ThemNhanVienComponent,
    XoaNhanVienComponent,
    DetailNhanVienComponent,
    UpdateKhachHangComponent,
    KhachhangComponent,
    DeleteKhachhangComponent,
    CreateKhachhangComponent,
    DichvuComponent,
    CreateDichvuComponent,
    DeleteDichvuComponent,
    DetailDichvuComponent,
    HopdongComponent,
    CreateHopdongComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
