import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TimeTableService {
  constructor(private http: HttpClient) {}
  BASE_URL = env.baseUrl;

  getTimeTables(page: number, semester: any, query = '') {
    let params = new HttpParams();

    // Set the parameters
    params = params.append('page', page);
    if (query !== '') params = params.append('query', query);
    if (semester.length) params = params.append('semester', semester);

    return this.http.get<any>(`${this.BASE_URL}timetables`, { params });
  }

  addTimeTable(timetableRequestData: any): Observable<any> {
    debugger;
    return this.http.post<any>(
      `${this.BASE_URL}/timetable`,
      timetableRequestData
    );
  }
}
