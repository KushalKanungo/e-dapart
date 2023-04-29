import { Injectable } from '@angular/core';
import { ResearchPaper } from '../_models/research-paper';

@Injectable({
  providedIn: 'root',
})
export class ResearchPaperService {
  constructor() {}
  researchPapers: ResearchPaper[] = [
    {
      id: 1,
      title:
        'Design and Implementation of a Low-Power Voltage-Controlled Oscillator',
      description:
        'This project involves the design and implementation of a low-power voltage-controlled oscillator (VCO) using MOSFET technology for wireless communication applications.',
      publish_year: 2022,
      students: ['John Smith', 'Jessica Lee'],
      mentors: ['Dr. Jane Doe'],
    },
    {
      id: 2,
      title: 'Development of an Intelligent Solar Tracking System',
      description:
        "This project aims to develop an intelligent solar tracking system that uses sensors to track the sun's movement and adjust solar panel orientation for optimal energy generation.",
      publish_year: 2023,
      students: ['Sarah Kim', 'David Nguyen'],
      mentors: ['Dr. James Smith', 'Dr. Anna Chen'],
    },
    {
      id: 3,
      title:
        'Design and Implementation of a Low-Noise Amplifier for RF Applications',
      description:
        'This project involves the design and implementation of a low-noise amplifier (LNA) for radio frequency (RF) applications using CMOS technology.',
      publish_year: 2021,
      students: ['Emily Wilson', 'Michael Johnson'],
      mentors: ['Dr. Karen Lee'],
    },
    {
      id: 4,
      title: 'Design and Implementation of a Wireless Power Transfer System',
      description:
        'This project involves the design and implementation of a wireless power transfer system that can transmit power wirelessly over a distance using resonant magnetic coupling.',
      publish_year: 2022,
      students: ['David Kim', 'Jennifer Nguyen'],
      mentors: ['Dr. James Lee', 'Dr. Anna Chen'],
    },
    {
      id: 5,
      title:
        'Design and Implementation of a Digital Signal Processor for Audio Applications',
      description:
        'This project involves the design and implementation of a digital signal processor (DSP) using Verilog for audio applications, such as digital audio effects and filters.',
      publish_year: 2023,
      students: ['Andrew Lee', 'Jessica Kim'],
      mentors: ['Dr. David Kim'],
    },
    {
      id: 6,
      title:
        'Design and Implementation of a FPGA-Based Image Processing System',
      description:
        'This project involves the design and implementation of a field-programmable gate array (FPGA)-based image processing system that can perform real-time image filtering and enhancement.',
      publish_year: 2021,
      students: ['Michael Johnson', 'Emily Wilson'],
      mentors: ['Dr. Karen Lee'],
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
    },
  ];
}
