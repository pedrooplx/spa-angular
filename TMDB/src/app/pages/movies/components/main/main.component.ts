import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-home',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor(private moviesHomeService: MoviesService) { }

  public movies!: Movie[];

  ngOnInit() {

    this.moviesHomeService
      .GetTopRatedMovies()
      .subscribe(moviesList => {
        this.movies = moviesList.results;
        console.log(moviesList);
        console.log(moviesList.results);
      },
      err => console.log(err)
      );
  }
}
