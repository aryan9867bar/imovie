import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn:"root"
})

export class MovieService {

  apiKey = environment.API_KEY;
  apiUrl = 'http://www.omdbapi.com/';

  constructor (private http:HttpClient) {

  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?t=${query}&apikey=${this.apiKey}`);
  }

}
