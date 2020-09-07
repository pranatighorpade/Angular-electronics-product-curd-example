import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    this.service = TestBed.inject(AuthService);
  });

  beforeEach(inject(
    [AuthService, HttpTestingController],
    (serviceName, httpMockName) => {
      service = serviceName;
      httpMock = httpMockName;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
