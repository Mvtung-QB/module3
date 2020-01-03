import {DichVu} from '../../DichVu/model/dichvu';
import {Khachhang} from '../../KhachHang/model/Khachhang';

export class HopDong {
  id: string;
  ngaylamhopdong: string;
  ngayketthuc: string;
  tiendatcoc: number;
  dichvu: DichVu;
  khachhang: Khachhang;
  constructor(id, ngaylamhopdong, ngayketthuc, tiendatcoc) {
    this.id = id;
    this.ngaylamhopdong = ngaylamhopdong;
    this.ngayketthuc = ngayketthuc;
    this.tiendatcoc = tiendatcoc;
  }
}
