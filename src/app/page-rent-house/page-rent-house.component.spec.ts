import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRentHouseComponent } from './page-rent-house.component';

describe('PageRentHouseComponent', () => {
  let component: PageRentHouseComponent;
  let fixture: ComponentFixture<PageRentHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRentHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRentHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
