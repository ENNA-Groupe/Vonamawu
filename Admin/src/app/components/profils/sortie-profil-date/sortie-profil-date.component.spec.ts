import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieProfilDateComponent } from './sortie-profil-date.component';

describe('SortieProfilDateComponent', () => {
  let component: SortieProfilDateComponent;
  let fixture: ComponentFixture<SortieProfilDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortieProfilDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortieProfilDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
