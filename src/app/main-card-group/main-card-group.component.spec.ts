import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardGroupComponent } from './main-card-group.component';

describe('MainCardGroupComponent', () => {
  let component: MainCardGroupComponent;
  let fixture: ComponentFixture<MainCardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCardGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
