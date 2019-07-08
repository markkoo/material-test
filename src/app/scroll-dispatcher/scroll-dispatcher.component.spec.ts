import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDispatcherComponent } from './scroll-dispatcher.component';

describe('ScrollDispatcherComponent', () => {
  let component: ScrollDispatcherComponent;
  let fixture: ComponentFixture<ScrollDispatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDispatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDispatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
