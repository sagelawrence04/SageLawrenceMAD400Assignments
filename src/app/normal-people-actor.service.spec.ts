import { TestBed } from '@angular/core/testing';

import { NormalPeopleActorService } from './normal-people-actor.service';

describe('NormalPeopleActorService', () => {
  let service: NormalPeopleActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalPeopleActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
