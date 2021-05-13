import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpNeedypersonComponent } from './help-needyperson.component';

describe('HelpNeedypersonComponent', () => {
  let component: HelpNeedypersonComponent;
  let fixture: ComponentFixture<HelpNeedypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpNeedypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpNeedypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
