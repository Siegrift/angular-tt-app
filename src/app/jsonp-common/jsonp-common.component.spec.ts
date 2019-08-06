import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpCommonComponent } from './jsonp-common.component';

describe('JsonpCommonComponent', () => {
  let component: JsonpCommonComponent;
  let fixture: ComponentFixture<JsonpCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
