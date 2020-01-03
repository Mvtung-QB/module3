import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKhachhangComponent } from './create-khachhang.component';

describe('CreateKhachhangComponent', () => {
  let component: CreateKhachhangComponent;
  let fixture: ComponentFixture<CreateKhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
