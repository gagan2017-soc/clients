import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransEntryComponent } from './page-trans-entry.component';

describe('PageTransEntryComponent', () => {
  let component: PageTransEntryComponent;
  let fixture: ComponentFixture<PageTransEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTransEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTransEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
