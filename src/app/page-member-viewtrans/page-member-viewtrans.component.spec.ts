import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMemberViewtransComponent } from './page-member-viewtrans.component';

describe('PageMemberViewtransComponent', () => {
  let component: PageMemberViewtransComponent;
  let fixture: ComponentFixture<PageMemberViewtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMemberViewtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMemberViewtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
