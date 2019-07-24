import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteXssComponent } from './route-xss.component';

describe('RouteXssComponent', () => {
  let component: RouteXssComponent;
  let fixture: ComponentFixture<RouteXssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteXssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteXssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
