import { Component } from '@angular/core';
import { ResearchPaper } from 'src/app/_models/research-paper';
import { ResearchPaperService } from 'src/app/_services/research-paper.service';
import { ReasearchPaperFormComponent } from 'src/app/reasearch-paper-form/reasearch-paper-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthServiceService } from 'src/app/_services/auth-service.service';

@Component({
  selector: 'app-research-papers',
  templateUrl: './research-papers.component.html',
  styleUrls: ['./research-papers.component.scss'],
})
export class ResearchPapersComponent {
  researchPapers: ResearchPaper[] = [];
  ref!: DynamicDialogRef;
  query: string = '';
  year!: number;
  isLoading = true;
  isLoggedIn = false;

  constructor(
    private researchPaperService: ResearchPaperService,
    public dialogService: DialogService,
    private authService: AuthServiceService
  ) {
    this.onSearch(null);
    // this.researchPapers = researchPaperService.researchPapers;
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserAdmin();
  }
  openForm() {
    this.ref = this.dialogService.open(ReasearchPaperFormComponent, {
      header: 'Add Research Paper',
      width: '50vw',
      style: { 'min-width': '380px', 'min-height': '460px' },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.researchPapers.push(data);
        // TODO: API calling here
      }
    });
  }

  onSearch($event: any) {
    this.query = $event || this.query;
    this.isLoading = true;
    setTimeout(() => {
      this.researchPapers = this.researchPaperService.searchContests(
        this.query
      );
      if (this.query === '') {
        this.researchPapers = this.researchPaperService.researchPapers;
      }
      this.isLoading = false;
    }, 1500);
  }

  searchSelectedName(selectedName: string) {
    this.query = selectedName;
    this.onSearch(null);
  }
}
