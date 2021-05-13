import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedypersonComponent } from './add-needyperson.component';

describe('AddNeedypersonComponent', () => {
  let component: AddNeedypersonComponent;
  let fixture: ComponentFixture<AddNeedypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNeedypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
