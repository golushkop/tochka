import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrransactionViewComponent } from './trransaction-view.component';

describe('TrransactionViewComponent', () => {
  let component: TrransactionViewComponent;
  let fixture: ComponentFixture<TrransactionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrransactionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
