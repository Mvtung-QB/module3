export class Khachhang {
  id: string;
  idloaikhach: string;
  hoten: string;
  ngaysinh: string;
  socmnd: number;
  sodt: number;
  email: string;
  diachi: string;

  constructor(idkhachhang, idloaikhach, hoten, ngaysinh, socmnd, sodt, email, diachi) {
    this.id = idkhachhang;
    this.idloaikhach = idloaikhach;
    this.hoten = hoten;
    this.ngaysinh = ngaysinh;
    this.socmnd = socmnd;
    this.sodt = sodt;
    this.email = email;
    this.diachi = diachi;
  }
}
