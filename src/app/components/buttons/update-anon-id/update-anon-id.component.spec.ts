import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnonIdComponent } from './update-anon-id.component';

describe('UpdateAnonIdComponent', () => {
  let component: UpdateAnonIdComponent;
  let fixture: ComponentFixture<UpdateAnonIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnonIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnonIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
