import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type DocumentType = 'form' | 'pdf';

@Component({
  selector: 'app-google-embedder',
  templateUrl: './google-embedder.component.html',
  styleUrls: ['./google-embedder.component.scss'],
})
export class GoogleEmbedderComponent {
  @Input() embeddedLink!: string;
  @Input() embeddedType!: DocumentType;
  sanitizedUrl!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    switch (this.embeddedType) {
      case 'form':
        this.embeddedLink = this.embeddedLink.substring(
          0,
          this.embeddedLink.indexOf('viewform') + 8
        );
        this.embeddedLink + '?embedded=true';

        break;
      case 'pdf':
        this.embeddedLink = this.embeddedLink.substring(
          0,
          this.embeddedLink.indexOf('view')
        );
        this.embeddedLink = this.embeddedLink + 'preview';
        console.log(this.embeddedLink);
        
        break;
    }
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.embeddedLink
    );
  }
}
