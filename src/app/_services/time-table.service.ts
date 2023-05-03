import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TimeTableService {
  constructor(private http: HttpClient) {}
  BASE_URL = env.baseUrl;

  getTimeTable() {}

  addTimeTable(timetableRequestData: any): Observable<any> {
    debugger;
    return this.http.post<any>(
      `${this.BASE_URL}/timetable`,
      timetableRequestData
    );
  }
}
