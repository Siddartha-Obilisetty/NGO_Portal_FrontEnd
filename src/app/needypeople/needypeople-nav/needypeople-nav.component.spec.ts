import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedypeopleNavComponent } from './needypeople-nav.component';

describe('NeedypeopleNavComponent', () => {
  let component: NeedypeopleNavComponent;
  let fixture: ComponentFixture<NeedypeopleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedypeopleNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedypeopleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
