import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNeedypersonByNameComponent } from './find-needyperson-by-name.component';

describe('FindNeedypersonByNameComponent', () => {
  let component: FindNeedypersonByNameComponent;
  let fixture: ComponentFixture<FindNeedypersonByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindNeedypersonByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNeedypersonByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
