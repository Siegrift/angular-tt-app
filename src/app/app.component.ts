import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('linkText', {static: false}) linkText: ElementRef;
  unsafeLink: string;

  interpolatingNullValue = null;

  // try: http://localhost:4200/xss?html=<img src=x onerror=alert(0) />
  changeLink(link) {
    this.unsafeLink = 'html?' + link;
  }
}
