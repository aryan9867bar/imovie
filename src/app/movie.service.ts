import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn:"root"
})

export class MovieService {

  apiKey = environment.API_KEY;

  constructor (private http:HttpClient) {

  }

  getMovie(): Observable<any> {
      return this.http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${this.apiKey}&language=en-US&page=1`);
  }

}
