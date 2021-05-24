import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorNavComponent } from './donor-nav.component';

describe('DonorNavComponent', () => {
  let component: DonorNavComponent;
  let fixture: ComponentFixture<DonorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
