import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAmentiesComponent } from './page-amenties.component';

describe('PageAmentiesComponent', () => {
  let component: PageAmentiesComponent;
  let fixture: ComponentFixture<PageAmentiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAmentiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAmentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
