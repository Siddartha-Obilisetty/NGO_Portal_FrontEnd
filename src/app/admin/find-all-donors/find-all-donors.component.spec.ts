import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllDonorsComponent } from './find-all-donors.component';

describe('FindAllDonorsComponent', () => {
  let component: FindAllDonorsComponent;
  let fixture: ComponentFixture<FindAllDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllDonorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
