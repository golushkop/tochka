import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchEventsComponent } from './watch-events.component';

describe('WatchEventsComponent', () => {
  let component: WatchEventsComponent;
  let fixture: ComponentFixture<WatchEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
