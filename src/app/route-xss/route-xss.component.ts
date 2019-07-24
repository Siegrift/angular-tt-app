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
    this.activatedRoute.queryParams.subscribe(params => {
      this.innerHTML = params['html']
    });
  }

}
