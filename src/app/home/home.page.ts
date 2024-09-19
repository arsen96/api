import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  http = inject(HttpClient);
  public apiKey = "";
  public standings = [];

  private apiUrl = 'https://v3.football.api-sports.io/standings?league=39&season=2022';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '0045ddd5d90e3db046639286fa515bb9'
  });
  constructor() { }

  ngOnInit() {
    this.apiKey = '';
    this.http.get(this.apiUrl, { headers: this.headers }).subscribe((data:any) => {
      this.standings = data.response[0].league.standings[0];
    })
  }

}
