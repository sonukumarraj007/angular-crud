import { User } from './../class/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  //  HttpClient API get() method => Fetch user by id
  getUser(id): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create user
  createUser(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update user
  updateUser(id, user): Observable<User> {
    return this.http.put<User>(this.apiURL + '/user/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete user
  deleteUser(id) {
    return this.http.delete<User>(this.apiURL + '/user/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}