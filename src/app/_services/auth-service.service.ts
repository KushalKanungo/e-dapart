import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  BASE_URL = 'http://localhost:3000/login';
  isAdmin = false;
  constructor(private http: HttpClient) {}
  login(accessToken: string): Observable<any> {
    return this.http.post<any>(this.BASE_URL, { token: accessToken });
  }

  isUserAdmin() {
    this.isAdmin = localStorage.getItem('isAdmin') === 'true' || false;
    return this.isAdmin;
  }

  setAdmin() {
    localStorage.setItem('isAdmin', 'true');
  }
}
