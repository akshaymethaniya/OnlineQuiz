import { TestBed, inject } from '@angular/core/testing';

import { QuizService } from './quiz.service';

describe('EnrollmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizService]
    });
  });

  it('should be created', inject([QuizService], (service: QuizService) => {
    expect(service).toBeTruthy();
  }));
});
