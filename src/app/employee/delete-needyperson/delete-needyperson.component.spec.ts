import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNeedypersonComponent } from './delete-needyperson.component';

describe('DeleteNeedypersonComponent', () => {
  let component: DeleteNeedypersonComponent;
  let fixture: ComponentFixture<DeleteNeedypersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNeedypersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNeedypersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
