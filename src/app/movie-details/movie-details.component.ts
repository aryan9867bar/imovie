import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movieData: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie() {
    this.movieService.getMovie().subscribe((data: any) => {
      this.movieData = data;
    });
  }
}
