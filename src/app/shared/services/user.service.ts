import { Injectable } from '@angular/core';
import {User} from "../../users/interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}/users`);
  }

  public getUser(userId: number): Observable<User>{
    return this.http.get<User>(`${this.apiURL}/users/${userId}`)
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiURL}/users/`, user);
  }
}
