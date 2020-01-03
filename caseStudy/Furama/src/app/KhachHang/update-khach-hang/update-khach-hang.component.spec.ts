import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKhachHangComponent } from './update-khach-hang.component';

describe('UpdateKhachHangComponent', () => {
  let component: UpdateKhachHangComponent;
  let fixture: ComponentFixture<UpdateKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
