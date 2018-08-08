import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdetaiventeComponent } from './consulterdetaivente.component';

describe('ConsulterdetaiventeComponent', () => {
  let component: ConsulterdetaiventeComponent;
  let fixture: ComponentFixture<ConsulterdetaiventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterdetaiventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdetaiventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
