import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoaNhanVienComponent } from './xoa-nhan-vien.component';

describe('XoaNhanVienComponent', () => {
  let component: XoaNhanVienComponent;
  let fixture: ComponentFixture<XoaNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoaNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
