import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchValue = '';
  year = '';

  constructor(private http: HttpClient) { }

  response: any;

  search() {
    this.http.get(`https://www.omdbapi.com/?t=${encodeURI(this.searchValue)}${this.year ? "&y=" + encodeURI(this.year) : ''}&apikey=f583f52f`).subscribe(response => {
      console.log(response);
      this.response = response;
    });
  }


}
