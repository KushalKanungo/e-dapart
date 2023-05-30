import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { environment } from 'src/environment/environment';
import { AuthServiceService } from '../_services/auth-service.service';
import { Location } from '@angular/common';
// import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private messageService: MessageService,
    private location: Location
  ) {}
  clientId = environment.clientId;
  isLoggedIn = false;
  items: MenuItem[] = [
    {
      label: 'Institute',
      routerLink: 'home',
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
          routerLink: 'timetables',
          items: [
            {
              label: 'Semester 1',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 1 },
                });
              },
            },
            {
              label: 'Semester 2',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 2 },
                });
              },
            },
            {
              label: 'Semester 3',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 3 },
                });
              },
            },
            {
              label: 'Semester 4',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 4 },
                });
              },
            },
            {
              label: 'Semester 5',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 5 },
                });
              },
            },
            {
              label: 'Semester 6',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 6 },
                });
              },
            },
            {
              label: 'Semester 7',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 7 },
                });
              },
            },
            {
              label: 'Semester 8',
              command: () => {
                this.router.navigate(['timetables'], {
                  state: { semester: 8 },
                });
              },
            },
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
    if (this.authService.isAuthorized()) {
      this.isLoggedIn = true;
      return;
    }
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      this.startGoogleLogin();
    };
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['home'], { replaceUrl: true });
    this.startGoogleLogin();
  }

  startGoogleLogin() {
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
      { theme: 'filled', size: 'large', width: '100%', shape: 'pill' }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  handleCredentialResponse(response: any) {
    this.authService.login(response).subscribe({
      next: (data) => {
        this.authService.setAdmin();
        this.messageService.add({
          severity: 'success',
          summary: 'Logged IN',
          detail: 'You are logged in successfully ',
        });
        this.isLoggedIn = true;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'danger',
          summary: 'UnAuthorized',
          detail: err,
        });
      },
    });
  }
}
