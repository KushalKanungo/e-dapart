import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] = [
    {
      label: 'Institute',
      icon: 'pi pi-fw pi-building',
      items: [
        { label: 'Rules & Regulations' },
        { label: 'Campus & Facilities' },
      ],
    },
    {
      label: 'Academics',
      icon: 'pi pi-fw pi-users',
      items: [
        { label: 'Academic Calendar' },
        {
          label: 'Time Table',
          items: [
            { label: 'Semester 1' },
            { label: 'Semester 2' },
            { label: 'Semester 3' },
            { label: 'Semester 4' },
            { label: 'Semester 5' },
            { label: 'Semester 6' },
            { label: 'Semester 7' },
            { label: 'Semester 8' },
          ],
        },
        { label: 'Subject Notes' },
        { label: 'Syllabus' },
      ],
    },

    {
      label: 'Faculty & Staff',
      icon: 'pi pi-fw pi-user-plus',
      items: [{ label: 'Employee Directory' }, { label: 'Careers' }],
    },
    {
      label: 'Research',
      icon: 'pi pi-fw pi-book',
      items: [
        { label: 'Pubication & Patents' },
        { label: 'Sponsored' },
        { label: 'Workshops' },
        { label: 'Seminars' },
      ],
    },
  ];
}
