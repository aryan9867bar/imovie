import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf, CommonModule, HttpClientModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movieData: any;
  searchQuery: string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.searchQuery = params.get('query') || ''; // Value set 
    });

    this.fetchMovie();
  }

  fetchMovie() {
   
    this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.movieData = data;
    });
  }

}
