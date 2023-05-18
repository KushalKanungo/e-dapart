import { Injectable } from '@angular/core';
import { ResearchPaper } from '../_models/research-paper';
import { Observable } from 'rxjs';
import { Filter } from '../_models/filter';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResearchPaperService {
  constructor(private http: HttpClient) {}
  private BASE_URL = environment.baseUrl;

  researchPapers: ResearchPaper[] = [
    {
      id: 1,
      title:
        'An Innovative Approach to Energy Conservation using Voltage Regulation',
      description:
        'This paper presents a novel technique for energy conservation in electrical systems by regulating the voltage.',
      publish_year: 2022,
      url: 'https://drive.google.com/file/d/1FdYYUA6pnixn1WwFZcxLdiku1KkgfgVL/view?usp=share_link',
      tags: ['energy conservation', 'voltage regulation', 'power systems'],
      students: ['Amit Kumar', 'Sneha Singh'],
      mentors: ['Dr. Ramesh Sharma', 'Dr. Priya Singh'],
    },
    {
      id: 2,
      title:
        'Design and Implementation of an Efficient DC-DC Converter for Renewable Energy Sources',
      description:
        'This paper presents the design and implementation of an efficient DC-DC converter for renewable energy sources like solar panels and wind turbines.',
      publish_year: 2021,
      url: 'https://www.example.com/paper2',
      tags: [
        'DC-DC converter',
        'renewable energy',
        'solar panels',
        'wind turbines',
      ],
      students: ['Anjali Mishra', 'Rajesh Kumar'],
      mentors: ['Dr. Sanjay Sharma', 'Dr. Anil Gupta'],
    },
    {
      id: 3,
      title:
        'Real-time Monitoring and Control of Electrical Systems using Internet of Things',
      description:
        'This paper presents a real-time monitoring and control system for electrical systems using Internet of Things (IoT) technology.',
      publish_year: 2020,
      url: 'https://www.example.com/paper3',
      tags: [
        'Internet of Things',
        'monitoring and control',
        'electrical systems',
      ],
      students: ['Prashant Singh', 'Amit Kumar'],
      mentors: ['Dr. Priya Singh', 'Dr. Rajesh Verma'],
    },
    {
      id: 4,
      title: 'Optimal Sizing of Battery Energy Storage Systems for Microgrids',
      description:
        'This paper presents a methodology for optimal sizing of battery energy storage systems in microgrids.',
      publish_year: 2019,
      url: 'https://www.example.com/paper4',
      tags: ['battery energy storage', 'microgrids'],
      students: ['Neha Gupta', 'Ankur Sharma'],
      mentors: ['Dr. Rajesh Kumar', 'Dr. Priya Singh'],
    },
    {
      id: 5,
      title:
        'Design and Analysis of a Three-phase Induction Motor for Electric Vehicles',
      description:
        'This paper presents the design and analysis of a three-phase induction motor for electric vehicles.',
      publish_year: 2018,
      url: 'https://www.example.com/paper5',
      tags: ['three-phase induction motor', 'electric vehicles'],
      students: ['Rahul Verma', 'Kavita Singh'],
      mentors: ['Dr. Anuj Kumar', 'Dr. Sunita Verma'],
    },
    {
      id: 6,
      title:
        'Design and Implementation of a FPGA-Based Image Processing System',
      description:
        'This project involves the design and implementation of a field-programmable gate array (FPGA)-based image processing system that can perform real-time image filtering and enhancement.',
      publish_year: 2021,
      students: ['Amit Kumar', 'Emily Wilson'],
      mentors: ['Dr. Karen Lee'],
      url: 'this.is.test.url',
    },
    {
      id: 7,
      title:
        'Design and Implementation of a Multi-Band RF Front-End for Wireless Communication',
      description:
        'This project involves the design and implementation of a multi-band radio frequency (RF) front-end for wireless communication applications using CMOS technology.',
      publish_year: 2022,
      students: ['Jessica Lee', 'John Smith'],
      mentors: ['Dr. Jane Doe'],
      url: 'this.is.test.url',
    },
    {
      id: 8,
      title:
        'Design and Implementation of a Power Management System for Battery-Powered Devices',
      description:
        'This project involves the design and implementation of a power management system for battery-powered devices that can optimize power usage and prolong battery life.',
      publish_year: 2023,
      students: ['David Nguyen', 'Sarah Kim'],
      mentors: ['Dr. James Smith', 'Dr. Anna Chen'],
      url: 'this.is.test.url',
    },
  ];

  getResearchPapers(filter: Filter): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}`);
  }

  searchContests(query: string) {
    return this.researchPapers.filter(
      (research) =>
        research.title.toLowerCase().includes(query.toLowerCase()) ||
        research.mentors.includes(query) ||
        research.students.includes(query)
    );
  }
}
