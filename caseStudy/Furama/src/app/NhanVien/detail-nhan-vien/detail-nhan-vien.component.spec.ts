import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNhanVienComponent } from './detail-nhan-vien.component';

describe('DetailNhanVienComponent', () => {
  let component: DetailNhanVienComponent;
  let fixture: ComponentFixture<DetailNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
