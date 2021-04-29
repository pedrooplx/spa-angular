import { Movie } from './../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesHomeService } from './movies-home.service';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html'
})
export class MoviesHomeComponent implements OnInit {

  constructor(private moviesHomeService: MoviesHomeService) { }

  public movies!: Movie[];

  ngOnInit() {

    this.moviesHomeService
      .GetTopRatedMovies()
      .subscribe(moviesList => {
        this.movies = moviesList;
        console.log(moviesList);
      },
      err => console.log(err)
      );
  }
}
