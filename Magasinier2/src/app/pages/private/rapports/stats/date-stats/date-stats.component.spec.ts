import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStatsComponent } from './date-stats.component';

describe('DateStatsComponent', () => {
  let component: DateStatsComponent;
  let fixture: ComponentFixture<DateStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
