import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerColorComponent } from './changer-color.component';

describe('ChangerColorComponent', () => {
  let component: ChangerColorComponent;
  let fixture: ComponentFixture<ChangerColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
