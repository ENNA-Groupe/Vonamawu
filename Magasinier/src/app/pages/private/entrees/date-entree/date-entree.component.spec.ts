import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEntreeComponent } from './date-entree.component';

describe('DateEntreeComponent', () => {
  let component: DateEntreeComponent;
  let fixture: ComponentFixture<DateEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
