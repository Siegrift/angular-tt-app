import { Component, OnInit } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';

@Component({
  selector: 'app-browser-dom-adapter',
  templateUrl: './browser-dom-adapter.component.html',
  styleUrls: ['./browser-dom-adapter.component.css']
})
export class BrowserDomAdapterComponent implements OnInit {
  private browserDomAdapter: ɵBrowserDomAdapter = new ɵBrowserDomAdapter();

  ngOnInit() {
    this.browserDomAdapter.resolveAndSetHref(document.getElementById('linkId') as any, 'javascript:alert(0)', null)
  }
}
