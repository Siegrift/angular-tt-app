import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const componentPolicy: TrustedTypePolicy = TrustedTypes.createPolicy('app-root-policy', {
  createHTML(s: string): string {
    return s;
  },
  createURL(s: string): string {
    return s;
  },
  createScriptURL(s: string): string {
    return s;
  },
  createScript(s: string): string {
    return s;
  },
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}
  ownPolicyHtml = componentPolicy.createHTML('<img src=x onclick=alert(/ownPolicy/)>');
  bypassSecurityHtml = this.sanitizer.bypassSecurityTrustHtml('<i>bypassSecurityTrustHtml</i>');
}
