import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFesCalComponent } from './page-fes-cal.component';

describe('PageFesCalComponent', () => {
  let component: PageFesCalComponent;
  let fixture: ComponentFixture<PageFesCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFesCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFesCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
