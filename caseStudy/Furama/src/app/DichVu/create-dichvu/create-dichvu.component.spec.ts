import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDichvuComponent } from './create-dichvu.component';

describe('CreateDichvuComponent', () => {
  let component: CreateDichvuComponent;
  let fixture: ComponentFixture<CreateDichvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDichvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
