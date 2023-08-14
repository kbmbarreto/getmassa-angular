import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Massa } from './massa.model';

@Injectable({
  providedIn: 'root'
})
export class MassaService {

  baseUrl = "http://localhost:8005/masses"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'ENTENDI', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  create(massa: Massa): Observable<Massa> {
    return this.http.post<Massa>(this.baseUrl, massa)
  }

  read(): Observable<Massa[]> {
    return this.http.get<Massa[]>(this.baseUrl)
  }
}
