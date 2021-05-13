import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNeedypersonByIdComponent } from './find-needyperson-by-id.component';

describe('FindNeedypersonByIdComponent', () => {
  let component: FindNeedypersonByIdComponent;
  let fixture: ComponentFixture<FindNeedypersonByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindNeedypersonByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNeedypersonByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
