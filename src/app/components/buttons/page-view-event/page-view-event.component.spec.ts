import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewEventComponent } from './page-view-event.component';

describe('PageViewEventComponent', () => {
  let component: PageViewEventComponent;
  let fixture: ComponentFixture<PageViewEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageViewEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
