import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenGuideComponent } from './page-gen-guide.component';

describe('PageGenGuideComponent', () => {
  let component: PageGenGuideComponent;
  let fixture: ComponentFixture<PageGenGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
