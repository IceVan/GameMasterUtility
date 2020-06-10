import { TestBed } from '@angular/core/testing';

import { DndTreasureService } from './dnd-treasure.service';

describe('DndTreasureService', () => {
  let service: DndTreasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndTreasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
