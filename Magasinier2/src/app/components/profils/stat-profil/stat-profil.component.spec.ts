import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProfilComponent } from './stat-profil.component';

describe('StatProfilComponent', () => {
  let component: StatProfilComponent;
  let fixture: ComponentFixture<StatProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
