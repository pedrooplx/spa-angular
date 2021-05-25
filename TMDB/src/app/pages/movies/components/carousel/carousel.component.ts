import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-home-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private moviesHomeService: MoviesService) {}

  public movies!: Movie[];

  ngOnInit(): void {
    
    this.moviesHomeService
      .GetLastestPopularMovies()
      .subscribe(moviesList => {
        this.movies = moviesList.results;
        console.log(moviesList);
        console.log(moviesList.results);
      },
      err => console.log(err)
      );
  }

}