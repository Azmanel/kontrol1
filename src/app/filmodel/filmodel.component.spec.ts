import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmodelComponent } from './filmodel.component';

describe('FilmodelComponent', () => {
  let component: FilmodelComponent;
  let fixture: ComponentFixture<FilmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
