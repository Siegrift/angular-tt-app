import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getPolicy } from '../trustedTypesPolicy';
import {
  TransferState,
  makeStateKey
} from '@angular/platform-browser';

const MY_DATA = makeStateKey('my_data');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer, private state: TransferState) {
    const data = this.state.get(MY_DATA, null);
    console.log('TransferState data:', data);

    if (data === null) {
      this.state.set(MY_DATA, 'data added from server');
    }
  }

  title = 'Custom title';
  ownPolicyHtml = getPolicy().createHTML('<img src=x onclick=alert(/ownPolicy/)>');
  bypassSecurityHtml = this.sanitizer.bypassSecurityTrustHtml('<i>bypassSecurityTrustHtml</i>');
  constHref = 'https://angular.io/tutorial';

  ngOnInit() {
  }

}
