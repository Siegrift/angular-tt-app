import { Component, Injectable } from "@angular/core";

import {
  HttpClient
} from "@angular/common/http";
import { FormControl } from "@angular/forms";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Observable } from 'rxjs';

class SearchItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}

@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";

  constructor(private http: HttpClient) {}

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp(apiURL, "callback").pipe(
      map((res:any) => {
        return res.results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
}

@Component({
  selector: 'app-jsonp-common',
  templateUrl: './jsonp-common.component.html',
  styleUrls: ['./jsonp-common.component.css']
})
export class JsonpCommonComponent {
  loading: boolean = false;
  results: Observable<SearchItem[]>;
  searchField: FormControl;

  constructor(private itunes: SearchService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.search(term)),
      tap(_ => (this.loading = false))
    ) as Observable<SearchItem[]>;
  }
}