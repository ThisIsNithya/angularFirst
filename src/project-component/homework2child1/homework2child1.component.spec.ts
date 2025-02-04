import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework2child1Component } from './homework2child1.component';

describe('Homework2child1Component', () => {
  let component: Homework2child1Component;
  let fixture: ComponentFixture<Homework2child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework2child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework2child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
