import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private ACCESS_TOKEN_KEY_NAME = 'accessToken';
  private BASE_URL = 'http://localhost:3000/';
  isAdmin = false;
  constructor(private http: HttpClient) {}

  login(accessToken: string): Observable<any> {
    return this.http
      .post<any>(`${this.BASE_URL}login`, { token: accessToken })
      .pipe(
        tap((response) => {
          this.saveAccessToken(response.accessToken, response.isAdmin);
        })
      );
  }

  signup(signupDetails: FormData): Observable<unknown> {
    return this.http.post<unknown>(`${this.BASE_URL}/signup`, signupDetails);
  }

  saveAccessToken(accessToken: string, isAdmin: boolean): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY_NAME, accessToken);
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }

  loadAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY_NAME);
  }

  clearAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY_NAME);
  }

  isAuthorized(): boolean {
    return this.loadAccessToken() ? true : false;
  }

  fallBack() {
    this.clearAccessToken();
  }

  isUserAdmin() {
    this.isAdmin = localStorage.getItem('isAdmin') === 'true' || false;
    return this.isAdmin;
  }

  logout() {
    localStorage.clear();
  }

  setAdmin() {
    localStorage.setItem('isAdmin', 'true');
  }
}
