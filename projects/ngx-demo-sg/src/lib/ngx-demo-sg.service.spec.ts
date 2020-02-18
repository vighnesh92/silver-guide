import { TestBed } from '@angular/core/testing';

import { NgxDemoSgService } from './ngx-demo-sg.service';

describe('NgxDemoSgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDemoSgService = TestBed.get(NgxDemoSgService);
    expect(service).toBeTruthy();
  });
});
