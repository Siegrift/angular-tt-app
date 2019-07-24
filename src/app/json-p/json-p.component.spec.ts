import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPComponent } from './json-p.component';

describe('JsonPComponent', () => {
  let component: JsonPComponent;
  let fixture: ComponentFixture<JsonPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
