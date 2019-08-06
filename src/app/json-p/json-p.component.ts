import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-json-p',
  templateUrl: './json-p.component.html',
  styleUrls: ['./json-p.component.css']
})
export class JsonPComponent implements OnInit {
  apiRoot: string = 'https://itunes.apple.com/search';
  items: Observable<String[]>
  
  constructor(private jsonp: Jsonp) { }

  ngOnInit() {
    const term = 'sum41'
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    this.items = this.jsonp.request(apiURL).pipe(
      map((res:any) => {
        return res.json().results
      })
    );
  }

}
