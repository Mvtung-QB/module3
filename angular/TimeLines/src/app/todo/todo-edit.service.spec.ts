import { TestBed } from '@angular/core/testing';

import { TodoEditService } from './todo-edit.service';

describe('TodoEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoEditService = TestBed.get(TodoEditService);
    expect(service).toBeTruthy();
  });
});
