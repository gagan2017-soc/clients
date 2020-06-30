import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminMainviewComponent } from './page-admin-mainview.component';

describe('PageAdminMainviewComponent', () => {
  let component: PageAdminMainviewComponent;
  let fixture: ComponentFixture<PageAdminMainviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminMainviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminMainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
