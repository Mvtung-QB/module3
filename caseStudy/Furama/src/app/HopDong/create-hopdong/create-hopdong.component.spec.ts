import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHopdongComponent } from './create-hopdong.component';

describe('CreateHopdongComponent', () => {
  let component: CreateHopdongComponent;
  let fixture: ComponentFixture<CreateHopdongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHopdongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
