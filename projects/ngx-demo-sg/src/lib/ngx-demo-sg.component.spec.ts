import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDemoSgComponent } from './ngx-demo-sg.component';

describe('NgxDemoSgComponent', () => {
  let component: NgxDemoSgComponent;
  let fixture: ComponentFixture<NgxDemoSgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDemoSgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDemoSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
