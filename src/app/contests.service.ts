import { Injectable } from '@angular/core';
import { Contest } from './_models/contest';
import { Filter } from './_models/filter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ContestsService {
  private BASE_URL = environment.baseUrl;

  constructor(private http:HttpClient) {}
  allContests: Contest[] = [
    {
      id: 1,
      name: 'Math Challenge',
      description: 'Test your math skills with a series of challenges',
      url: 'https://mathchallenge.com',
      dateCreated: new Date(),
    },
    {
      id: 2,
      name: 'Science Trivia',
      description: 'A trivia game based on various scientific facts',
      url: 'https://sciencetrivia.com',
      dateCreated: new Date(),
    },
    {
      id: 3,
      name: 'Language Exchange',
      description: 'Connect with people who want to another language',
      url: 'https://languageexchange.com',
      dateCreated: new Date(),
    },
    {
      id: 4,
      name: 'Coding Competition',
      description: 'Compete with other coders to solve coding problems',
      url: 'https://codingcompetition.com',
      dateCreated: new Date(),
    },
    {
      id: 5,
      name: 'Art Challenge',
      description:
        'Participate in an art challenge and showcase your creativity',
      url: 'https://artchallenge.com',
      dateCreated: new Date(),
    },
    {
      id: 6,
      name: 'Geography Quiz',
      description: 'Test your knowledge of geography with a fun quiz',
      url: 'https://geographyquiz.com',
      dateCreated: new Date(),
    },
    {
      id: 7,
      name: 'Business Plan Competition',
      description: 'Pitch your business idea and win cash prizes',
      url: 'https://businessplancompetition.com',
      dateCreated: new Date(),
    },
    {
      id: 8,
      name: 'Virtual Marathon',
      description: 'Run a marathon from the comfort of your home',
      url: 'https://virtualmarathon.com',
      dateCreated: new Date(),
    },
    {
      id: 9,
      name: 'Cooking Challenge',
      description:
        'Participate in a cooking challenge and show off your culinary skills',
      url: 'https://cookingchallenge.com',
      dateCreated: new Date(),
    },
    {
      id: 10,
      name: 'Music Trivia',
      description: 'A trivia game based on various musical facts',
      url: 'https://musictrivia.com',
      dateCreated: new Date(),
    },
    {
      id: 11,
      name: 'Fitness Challenge',
      description: 'Join a fitness challenge and track your progress',
      url: 'https://fitnesschallenge.com',
      dateCreated: new Date(),
    },
    {
      id: 12,
      name: 'Movie Quiz',
      description: 'Test your knowledge of movies with a fun quiz',
      url: 'https://moviequiz.com',
      dateCreated: new Date(),
    },
  ];

  searchContests(query: string) {
    return this.allContests.filter((contest) =>
      contest.name.toLowerCase().includes(query.toLowerCase())  
    );
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
  
  event_by_month(month:number, year: number): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}events/by_month`, {filter: {month, year}});
  }

}
