import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDonorByIdComponent } from './find-donor-by-id.component';

describe('FindDonorByIdComponent', () => {
  let component: FindDonorByIdComponent;
  let fixture: ComponentFixture<FindDonorByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDonorByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDonorByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
