import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sessionStatus = {
    isLoggedIn: false
  }

  $session = new BehaviorSubject<any>(this.sessionStatus);

  constructor(private _http: HttpClient) {
    let session = localStorage.getItem('sessionid');
    if (session) {
      this.sessionStatus.isLoggedIn = true;
      this.$session.next(this.sessionStatus);
    } else {
      this.$session.next(this.sessionStatus);
    }
  }

  login(loginData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post(`${environment.baseUrl}/login`, loginData).subscribe(
        (data: any) => {
          localStorage.setItem("sessionid", data.token)
          this.sessionStatus.isLoggedIn = true;
          this.$session.next(this.sessionStatus);
          resolve(data)
        },
        error => reject(error)
      )
    })
  }

  signUp(signupData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.post(`${environment.baseUrl}/signUp`, signupData).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }

  async signOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.sessionStatus = {
      isLoggedIn: false
    }
    this.$session.next(this.sessionStatus);
  }


}
