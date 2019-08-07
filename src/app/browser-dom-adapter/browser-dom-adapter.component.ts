import { Component, OnInit } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import { getPolicy } from '../trustedTypesPolicy';

@Component({
  selector: 'app-browser-dom-adapter',
  templateUrl: './browser-dom-adapter.component.html',
  styleUrls: ['./browser-dom-adapter.component.css']
})
export class BrowserDomAdapterComponent implements OnInit {
  private browserDomAdapter: ɵBrowserDomAdapter = new ɵBrowserDomAdapter();

  ngOnInit() {
    this.browserDomAdapter.resolveAndSetHref(document.getElementById('linkId') as any, 'javascript:alert(0)', null);
    this.browserDomAdapter.setInnerHTML(document.getElementById('divId'), getPolicy().createHTML('<b>scary inner html</b>'));
    this.browserDomAdapter.createTemplate(getPolicy().createHTML('<b>scary inner html created in template</b>'));
  }
}
