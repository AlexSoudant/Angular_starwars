import { TestBed, inject } from '@angular/core/testing';
import { PersonnagesService } from './personnages.service';

describe('PersonnagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonnagesService]
    });
  });

  it('should ...', inject([PersonnagesService], (service: PersonnagesService) => {
    expect(service).toBeTruthy();
  }));
});
