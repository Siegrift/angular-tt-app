import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-xss',
  templateUrl: './route-xss.component.html',
  styleUrls: ['./route-xss.component.css']
})
export class RouteXssComponent implements OnInit {
  innerHTML: string

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      if (!url[0]) return;
      // Angular santizies even these values
      this.innerHTML = url[0].path.substring(5);
    });
  }

}
