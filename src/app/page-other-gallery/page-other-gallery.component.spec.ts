import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOtherGalleryComponent } from './page-other-gallery.component';

describe('PageOtherGalleryComponent', () => {
  let component: PageOtherGalleryComponent;
  let fixture: ComponentFixture<PageOtherGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOtherGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOtherGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
