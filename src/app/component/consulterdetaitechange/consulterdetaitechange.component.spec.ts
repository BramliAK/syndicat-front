import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdetaitechangeComponent } from './consulterdetaitechange.component';

describe('ConsulterdetaitechangeComponent', () => {
  let component: ConsulterdetaitechangeComponent;
  let fixture: ComponentFixture<ConsulterdetaitechangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterdetaitechangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdetaitechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
