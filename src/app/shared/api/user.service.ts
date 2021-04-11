import { User } from './../class/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Define API
  apiURL = 'http://localhost:2020';

  constructor(private http: HttpClient) { }

  /*========================================
   CRUD Methods for consuming RESTful API
 =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch user list
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user')
  }

  //  HttpClient API get() method => Fetch user by id
  getUser(id): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user/' + id)
  }

  // HttpClient API post() method => Create user
  createUser(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(user), this.httpOptions)
  }

  // HttpClient API put() method => Update user
  updateUser(id, user): Observable<User> {
    return this.http.put<User>(this.apiURL + '/user/' + id, JSON.stringify(user), this.httpOptions)
  }

  // HttpClient API delete() method => Delete user
  deleteUser(id) {
    return this.http.delete<User>(this.apiURL + '/user/' + id, this.httpOptions);
  }

}