import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateToNgoComponent } from './donate-to-ngo.component';

describe('DonateToNgoComponent', () => {
  let component: DonateToNgoComponent;
  let fixture: ComponentFixture<DonateToNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateToNgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateToNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
