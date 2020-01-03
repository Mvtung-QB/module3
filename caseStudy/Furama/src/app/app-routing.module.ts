import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NhanvienComponent} from './NhanVien/nhanvien/nhanvien.component';
import {ThemNhanVienComponent} from './NhanVien/them-nhan-vien/them-nhan-vien.component';
import {XoaNhanVienComponent} from './NhanVien/xoa-nhan-vien/xoa-nhan-vien.component';
import {DetailNhanVienComponent} from './NhanVien/detail-nhan-vien/detail-nhan-vien.component';
import {KhachhangComponent} from './KhachHang/khachhang/khachhang.component';
import {DeleteKhachhangComponent} from './KhachHang/delete-khachhang/delete-khachhang.component';
import {UpdateKhachHangComponent} from './KhachHang/update-khach-hang/update-khach-hang.component';
import {CreateKhachhangComponent} from './KhachHang/create-khachhang/create-khachhang.component';
import {DichvuComponent} from './DichVu/dichvu/dichvu.component';
import {DetailDichvuComponent} from './DichVu/detail-dichvu/detail-dichvu.component';
import {CreateDichvuComponent} from './DichVu/create-dichvu/create-dichvu.component';
import {HopdongComponent} from './HopDong/hopdong/hopdong.component';
import {CreateHopdongComponent} from './HopDong/create-hopdong/create-hopdong.component';
import {BookingComponent} from './Booking/booking/booking.component';


const routes: Routes = [
  {
    path: 'app-NhanVien',
    component: NhanvienComponent
  },
  {
    path: 'them-NhanVien',
    component: ThemNhanVienComponent
  },
  {
    path: 'xoa-NhanVien/:id',
    component: XoaNhanVienComponent
  },
  {
    path: 'detail-NhanVien/:id',
    component: DetailNhanVienComponent
  },
  {
    path: 'app-KhachHang',
    component: KhachhangComponent
  },
  {
    path: 'xoa-KhachHang/:id',
    component: DeleteKhachhangComponent
  },
  {
    path: 'detail-KhachHang/:id',
    component: UpdateKhachHangComponent
  },
  {
    path: 'create-KhachHang',
    component: CreateKhachhangComponent
  },
  {
    path: 'app-DichVu',
    component: DichvuComponent
  },
  {
    path: 'detail-DichVu/:id',
    component: DetailDichvuComponent
  },
  {
    path: 'create-DichVu',
    component: CreateDichvuComponent
  },
  {
    path: 'app-HopDong',
    component: HopdongComponent
  },
  {
    path: 'create-HopDong',
    component: CreateHopdongComponent
  },
  {
    path: 'app-Booking',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
