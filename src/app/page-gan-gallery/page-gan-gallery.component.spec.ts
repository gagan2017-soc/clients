import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGanGalleryComponent } from './page-gan-gallery.component';

describe('PageGanGalleryComponent', () => {
  let component: PageGanGalleryComponent;
  let fixture: ComponentFixture<PageGanGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGanGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGanGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
