export class Nhanvien {
  id: string;
  idvitri: number;
  idtrinhdo: number;
  idbophan: number;
  hoten: string;
  ngaysinh: string;
  socmnd: number;
  sodt: number;
  email: string;
  diachi: string;
  luong: number;

  constructor(idnhanvien, idvitri, idtrinhdo, idbophan, hoten, ngaysinh, socmnd, sodt, email, diachi, luong){
    this.id = idnhanvien;
    this.idvitri = idvitri;
    this.idtrinhdo = idtrinhdo;
    this.idbophan = idbophan;
    this.hoten = hoten;
    this.ngaysinh = ngaysinh;
    this.socmnd = socmnd;
    this.sodt = sodt;
    this.email = email;
    this.diachi = diachi;
    this.luong = luong;
  }
}
