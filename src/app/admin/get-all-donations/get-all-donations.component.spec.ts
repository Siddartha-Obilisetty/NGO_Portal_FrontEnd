import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDonationsComponent } from './get-all-donations.component';

describe('GetAllDonationsComponent', () => {
  let component: GetAllDonationsComponent;
  let fixture: ComponentFixture<GetAllDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
