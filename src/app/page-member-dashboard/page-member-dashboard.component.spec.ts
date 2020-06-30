import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberDashboardComponent } from './page-member-dashboard.component';

describe('PageMemberDashboardComponent', () => {
  let component: PageMemberDashboardComponent;
  let fixture: ComponentFixture<PageMemberDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMemberDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMemberDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
