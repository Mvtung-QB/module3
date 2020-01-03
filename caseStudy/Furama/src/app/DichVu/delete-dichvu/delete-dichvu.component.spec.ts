import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDichvuComponent } from './delete-dichvu.component';

describe('DeleteDichvuComponent', () => {
  let component: DeleteDichvuComponent;
  let fixture: ComponentFixture<DeleteDichvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDichvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
