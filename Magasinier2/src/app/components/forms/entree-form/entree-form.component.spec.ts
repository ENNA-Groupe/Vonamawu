import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeFormComponent } from './entree-form.component';

describe('EntreeFormComponent', () => {
  let component: EntreeFormComponent;
  let fixture: ComponentFixture<EntreeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
