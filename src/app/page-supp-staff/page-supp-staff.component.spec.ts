import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuppStaffComponent } from './page-supp-staff.component';

describe('PageSuppStaffComponent', () => {
  let component: PageSuppStaffComponent;
  let fixture: ComponentFixture<PageSuppStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSuppStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuppStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
