import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getPolicy } from '../trustedTypesPolicy';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  title = "Custom title"
  ownPolicyHtml = getPolicy().createHTML('<img src=x onclick=alert(/ownPolicy/)>');
  bypassSecurityHtml = this.sanitizer.bypassSecurityTrustHtml('<i>bypassSecurityTrustHtml</i>');
  constHref = "https://angular.io/tutorial"

  ngOnInit() {
  }

}
