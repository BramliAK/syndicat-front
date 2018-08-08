import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumbytitreComponent } from './forumbytitre.component';

describe('ForumbytitreComponent', () => {
  let component: ForumbytitreComponent;
  let fixture: ComponentFixture<ForumbytitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumbytitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumbytitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
