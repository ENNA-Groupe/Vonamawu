import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentesComponent } from './ventes.component';

describe('EntreesComponent', () => {
  let component: VentesComponent;
  let fixture: ComponentFixture<VentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
