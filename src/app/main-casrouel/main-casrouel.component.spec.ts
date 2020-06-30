import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCasrouelComponent } from './main-casrouel.component';

describe('MainCasrouelComponent', () => {
  let component: MainCasrouelComponent;
  let fixture: ComponentFixture<MainCasrouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCasrouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCasrouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
