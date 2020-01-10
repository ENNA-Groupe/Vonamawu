import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntreeFormComponent } from './edit-entree-form.component';

describe('EditEntreeFormComponent', () => {
  let component: EditEntreeFormComponent;
  let fixture: ComponentFixture<EditEntreeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntreeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
