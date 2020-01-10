import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayEntreeComponent } from './today-entree.component';

describe('TodayEntreeComponent', () => {
  let component: TodayEntreeComponent;
  let fixture: ComponentFixture<TodayEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
