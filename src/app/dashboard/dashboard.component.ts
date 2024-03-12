import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchQuery: string = '';
  movieData: any;

  constructor(private movieService: MovieService, private router: Router) { }

  onSearch() {
    
  }

  searchMovies() {
    // // Call your service method with the searchQuery
    // this.movieService.searchMovies(this.searchQuery).subscribe(
    //   (data) => {
    //     this.movieData = data;
    //     console.log('Movie Data:', this.movieData);
    //   },
    //   (error) => {
    //     console.error('Error fetching movie data:', error);
    //   }
    // );

    this.router.navigate(['/movie-details', { query: this.searchQuery }]);
  }

  goToFeedback() {
    this.router.navigate(['/feedbackform']); // Navigate to the feedback form component
  }
}
