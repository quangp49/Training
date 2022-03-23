import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { PeriodicUnit } from '../sys-unit/sys-unit.component';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  private REST_API_SERVER = 'http://localhost:3000'
  private UNIT_API = 'http://localhost:8080/apinhom4/unit'

  constructor(private httpClient: HttpClient) { }

  public getTable(): Observable<any> {
    const url_table = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
      .get<any>(url_table, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getMenu(): Observable<any> {
    const url_menu = `${this.REST_API_SERVER}/menu`;
    return this.httpClient
      .get<any>(url_menu, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getUnit(): Observable<any> {
    const url_menu = `${this.UNIT_API}/get`;
    return this.httpClient
      .post<any>(url_menu, this.httpOptions, {})
      .pipe(catchError(this.handleError));
  }
  public insertUnit(): Observable<any> {
    const url_menu = `${this.UNIT_API}/insert`;
    return this.httpClient
      .post<any>(url_menu, this.httpOptions, {})
      .pipe(catchError(this.handleError));
  }
  public updateUnit(): Observable<any> {
    const url_menu = `${this.UNIT_API}/update`;
    return this.httpClient
      .post<any>(url_menu, this.httpOptions, {})
      .pipe(catchError(this.handleError));
  }
  public deleteUnit(): Observable<any> {
    const url_menu = `${this.UNIT_API}/delete`;
    return this.httpClient
      .post<any>(url_menu, this.httpOptions, {})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
