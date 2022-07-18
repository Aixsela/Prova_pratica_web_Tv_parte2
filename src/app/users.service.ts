import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedUser, LoginDto, RegisterDto } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiServer = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

    registrazione(user: RegisterDto): Observable<LoggedUser> {
      return this.http.post<LoggedUser>(this.apiServer + "register", user);
    }

    login(user: LoginDto): Observable<LoggedUser> {
      return this.http.post<LoggedUser>(this.apiServer + "login", user);
    }
 
}
