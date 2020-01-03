export class DichVu {

  id: string;

  tendichvu: string;

  dientich: number;

  sotang: number;

  songuoitoida: number;

  chiphithue: number;

  trangthai: string;

  constructor(id, tendichvu, dientich, sotang, songuoitoida, chiphithue, trangthai) {
    this.id = id;
    this.tendichvu = tendichvu;
    this.dientich = dientich;
    this.sotang = sotang;
    this.songuoitoida = songuoitoida;
    this.chiphithue = chiphithue;
    this.trangthai = trangthai;
  }
}
