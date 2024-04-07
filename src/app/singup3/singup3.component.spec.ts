import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singup3Component } from './singup3.component';

describe('Singup3Component', () => {
  let component: Singup3Component;
  let fixture: ComponentFixture<Singup3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singup3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Singup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
