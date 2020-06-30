import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberDisplayComponent } from './page-member-display.component';

describe('PageMemberDisplayComponent', () => {
  let component: PageMemberDisplayComponent;
  let fixture: ComponentFixture<PageMemberDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMemberDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMemberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
