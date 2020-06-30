import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminDashComponent } from './page-admin-dash.component';

describe('PageAdminDashComponent', () => {
  let component: PageAdminDashComponent;
  let fixture: ComponentFixture<PageAdminDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
