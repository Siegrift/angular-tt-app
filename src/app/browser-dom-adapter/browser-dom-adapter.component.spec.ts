import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserDomAdapterComponent } from './browser-dom-adapter.component';

describe('BrowserDomAdapterComponent', () => {
  let component: BrowserDomAdapterComponent;
  let fixture: ComponentFixture<BrowserDomAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserDomAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserDomAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
