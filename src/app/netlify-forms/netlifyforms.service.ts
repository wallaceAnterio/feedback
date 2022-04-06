import { Feedback } from './../feedback/feedback';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetlifyformsService {
  constructor(private http: HttpClient) {}

  submitFeedbackEntry(fbEntry: Feedback): Observable<any> {
    const entry = new HttpParams({
      fromObject: {
        'form-name': 'feedbackForm',
        ...fbEntry,
        rating: fbEntry.rating.toString(),
      },
    });

    return this.submitEntry(entry);
  }

  private submitEntry(entry: HttpParams): Observable<any> {
    return this.http
      .post('/', entry.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text',
      }).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (err.error instanceof ErrorEvent) {
      errMsg = `A client error occurred: ${err.error.message}`;
    } else {
      errMsg = `A server side error occurred. Code: ${err.status}. Message: ${err.message}`;
    }
    return throwError(() => new Error(errMsg));
  }
}
