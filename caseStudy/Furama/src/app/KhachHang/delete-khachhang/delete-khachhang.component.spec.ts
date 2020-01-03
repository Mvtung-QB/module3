import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKhachhangComponent } from './delete-khachhang.component';

describe('DeleteKhachhangComponent', () => {
  let component: DeleteKhachhangComponent;
  let fixture: ComponentFixture<DeleteKhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteKhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteKhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
