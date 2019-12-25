import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaitigBarComponent } from './raitig-bar.component';

describe('RaitigBarComponent', () => {
  let component: RaitigBarComponent;
  let fixture: ComponentFixture<RaitigBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaitigBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaitigBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
