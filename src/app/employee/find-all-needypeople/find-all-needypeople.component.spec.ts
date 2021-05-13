import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllNeedypeopleComponent } from './find-all-needypeople.component';

describe('FindAllNeedypeopleComponent', () => {
  let component: FindAllNeedypeopleComponent;
  let fixture: ComponentFixture<FindAllNeedypeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllNeedypeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllNeedypeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
