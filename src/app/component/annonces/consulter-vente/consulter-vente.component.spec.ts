import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterVenteComponent } from './consulter-vente.component';

describe('ConsulterVenteComponent', () => {
  let component: ConsulterVenteComponent;
  let fixture: ComponentFixture<ConsulterVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
