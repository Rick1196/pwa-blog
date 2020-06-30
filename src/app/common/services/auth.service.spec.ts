import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

let service: AuthService;

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return and auth token', () => {
    service.login({ email: 'ricardompp11@gmail.com', password: 'reinerlute11' }).then(data => {
      expect(data.token).not.toEqual(null);
    }).catch(error => {
      fail(error);
    });
  });
});
