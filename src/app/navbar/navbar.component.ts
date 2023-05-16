import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environment/environment';
// import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor() {}
  clientId = environment.clientId;

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
        { label: 'Academic Calendar', routerLink: 'calendar' },
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
      label: 'Contests',
      icon: 'pi pi-fw pi-user-plus',
      routerLink: 'contests',
    },
    {
      label: 'Research',
      icon: 'pi pi-fw pi-book',
      items: [
        { label: 'Research Papers', routerLink: 'research-papers' },
        { label: 'Sponsored' },
        { label: 'Workshops' },
        { label: 'Seminars' },
      ],
    },
  ];

  ngOnInit() {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large', width: '100%' }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  login() {}

  handleCredentialResponse(response: any) {
    console.log(response.credential);
  }
}
