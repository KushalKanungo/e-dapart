import { Injectable } from '@angular/core';
import { Contest } from './_models/contest';
import { Filter } from './_models/filter';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ContestsService {
  private BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}
  allContests!: Contest[];

  searchContests(query: string) {
    return this.allContests.filter((contest) =>
      contest.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  getContests(page: number, query = '') {
    let params = new HttpParams();

    // Set the parameters
    params = params.append('page', page);
    if (query !== '') params = params.append('query', query);

    return this.http.get<any>(`${this.BASE_URL}contests.json`, { params });
  }

  createNotice(newNotice: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}notices`, newNotice);
  }

  createContest(newContest: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}contests`, newContest);
  }

  createTimeTable(newtimetable: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}timetables`, newtimetable);
  }

  event_by_month(month: number, year: number): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}events/by_month`, {
      filter: { month, year },
    });
  }
}
