import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedypeopleLoginComponent } from './needypeople-login.component';

describe('NeedypeopleLoginComponent', () => {
  let component: NeedypeopleLoginComponent;
  let fixture: ComponentFixture<NeedypeopleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedypeopleLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedypeopleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
