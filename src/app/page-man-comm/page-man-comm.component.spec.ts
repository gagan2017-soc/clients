import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManCommComponent } from './page-man-comm.component';

describe('PageManCommComponent', () => {
  let component: PageManCommComponent;
  let fixture: ComponentFixture<PageManCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageManCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
