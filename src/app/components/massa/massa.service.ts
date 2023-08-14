import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Massa } from './massa.model';

@Injectable({
  providedIn: 'root'
})
export class MassaService {

  baseUrl = "http://localhost:8005/masses"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'ENTENDI', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(massa: Massa): Observable<Massa> {
    return this.http.post<Massa>(this.baseUrl, massa).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Massa[]> {
    return this.http.get<Massa[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Massa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Massa>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(massa: Massa): Observable<Massa> {
    const url = `${this.baseUrl}/${massa.id}`
    return this.http.put<Massa>(url, massa).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Massa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Massa>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

    errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
