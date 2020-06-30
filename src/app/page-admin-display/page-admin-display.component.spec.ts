import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminDisplayComponent } from './page-admin-display.component';

describe('PageAdminDisplayComponent', () => {
  let component: PageAdminDisplayComponent;
  let fixture: ComponentFixture<PageAdminDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
