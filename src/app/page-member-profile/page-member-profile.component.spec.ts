import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberProfileComponent } from './page-member-profile.component';

describe('PageMemberProfileComponent', () => {
  let component: PageMemberProfileComponent;
  let fixture: ComponentFixture<PageMemberProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMemberProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
