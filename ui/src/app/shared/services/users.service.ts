import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../base-url';

interface PasswordResetRequest {
  email: string
}

interface PasswordCompleteReq {
  password: string;
  token: string;
  uidb64: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  public requestChangePassword(req: PasswordResetRequest) {
    return this.http.post('http://localhost:8000/api/request-reset-email/', req);
  }

  public changePasswordRequest(url: string) {
    return this.http.get(url);
  }

  public changePasswordComplete(passwordInfo: PasswordCompleteReq) {
    return this.http.patch('http://localhost:8000/api/request-reset-complete', passwordInfo)
  }

}
