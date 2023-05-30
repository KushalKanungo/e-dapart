import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contest } from '../_models/contest';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContestFormComponent } from '../contest-form/contest-form.component';
import { AuthServiceService } from '../_services/auth-service.service';

@Component({
  selector: 'app-contest-card',
  templateUrl: './contest-card.component.html',
  styleUrls: ['./contest-card.component.scss'],
})
export class ContestCardComponent {
  @Input() contest!: Contest;
  @Output() showDetailsClicked: EventEmitter<number> = new EventEmitter();
  ref!: DynamicDialogRef;
  isAdmin: boolean = false;

  constructor(
    public dialogService: DialogService,
    public authService: AuthServiceService
  ) {
    this.isAdmin = authService.isUserAdmin();
  }

  showDetailEmitter() {
    this.showDetailsClicked.emit(this.contest.id);
  }

  openEditForm() {
    this.ref = this.dialogService.open(ContestFormComponent, {
      header: 'Edit Contest',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
      data: { contest: this.contest },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        // TODO: API calling here
      }
    });
  }
}
