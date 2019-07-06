import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotiniPanelComponent } from './rotini-panel.component';

describe('RotiniPanelComponent', () => {
  let component: RotiniPanelComponent;
  let fixture: ComponentFixture<RotiniPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotiniPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotiniPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
