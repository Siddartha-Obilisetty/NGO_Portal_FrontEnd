import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedypeopleProfileComponent } from './needypeople-profile.component';

describe('NeedypeopleProfileComponent', () => {
  let component: NeedypeopleProfileComponent;
  let fixture: ComponentFixture<NeedypeopleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedypeopleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedypeopleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
