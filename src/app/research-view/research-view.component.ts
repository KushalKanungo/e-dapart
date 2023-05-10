import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-research-view',
  templateUrl: './research-view.component.html',
  styleUrls: ['./research-view.component.scss']
})
export class ResearchViewComponent {

  researchData:any
  constructor(private ref: DynamicDialogRef,
    private config: DynamicDialogConfig){
      this.researchData = config.data.researchData
    }

  downloadGenerator(url: string){
    let match = /\/d\/([a-zA-Z0-9_-]+)\//.exec(url);
    let fileId = match ? match[1] : null;
    let downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`
    return downloadLink
  }

}
