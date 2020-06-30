import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManPaymentComponent } from './page-man-payment.component';

describe('PageManPaymentComponent', () => {
  let component: PageManPaymentComponent;
  let fixture: ComponentFixture<PageManPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageManPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
