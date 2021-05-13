import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNeedypersonComponent } from './register-needyperson.component';

describe('RegisterNeedypersonComponent', () => {
  let component: RegisterNeedypersonComponent;
  let fixture: ComponentFixture<RegisterNeedypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNeedypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNeedypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
