import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminMemberComponent } from './page-admin-member.component';

describe('PageAdminMemberComponent', () => {
  let component: PageAdminMemberComponent;
  let fixture: ComponentFixture<PageAdminMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
