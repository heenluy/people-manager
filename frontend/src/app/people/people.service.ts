import { catchError, map } from 'rxjs/operators';
import { People } from './people.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  // Preciso apontar para a porta 8080 depois.
  baseUrl: string = "http://localhost:8080/pessoas";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['error-msg'] : ['success-msg']
      })
  }


  create(people: People): Observable<People> {
    return this.http.post<People>(this.baseUrl, people).pipe(
      map((obj) => obj),
      catchError((e)=> this.errorHandler(e))
    )
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage('An error has occurred.', true);
    return EMPTY;
  }

  read(): Observable<People[]> {
    return this.http.get<People[]>(this.baseUrl)
  }

  readById(id: string): Observable<People> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<People>(url)
  }

  update(people: People): Observable<People> {
    const url = `${this.baseUrl}/${people.id}`
    return this.http.put<People>(url, people)
  }

  delete(people: People): Observable<People> {
    const url = `${this.baseUrl}/${people.id}`
    return this.http.delete<People>(url)

  }
}
