import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInformation } from '../models/user-information';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { AppSettings } from '../../app-settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getInformation(): Observable<UserInformation>
  {
    return this.http.get<UserInformation>(AppSettings.API_ENDPOINT+'auth/informations');
  }

  login(login: Login): Observable<UserInformation>
  {
    const formData = new FormData();
    if(login.username) formData.set('username', login.username);
    if(login.password) formData.set('password', login.password);
    return this.http.post<UserInformation>(AppSettings.API_ENDPOINT+'auth/login', formData);
  }

  register(register: Register): Observable<UserInformation>
  {
    const formData = new FormData();
    if(register.username) formData.set('username', register.username);
    if(register.email) formData.set('email', register.email);
    if(register.password) formData.set('password', register.password);
    if(register.passconf) formData.set('passconf', register.passconf);
    return this.http.post<UserInformation>(AppSettings.API_ENDPOINT+'auth/register', formData);
  }

  logout(): Observable<any>
  {
    return this.http.get(AppSettings.API_ENDPOINT+'auth/logout');
  }
}
