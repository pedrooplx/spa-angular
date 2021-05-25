import { Movie } from 'src/app/pages/movies/interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie!: Movie;
  
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      console.log(params['id'])
    });

    this.moviesService
      .GetMovieById()
      .subscribe(res => {
        this.movie = res;
        console.log(this.movie);
      },
      err => console.log(err)
      );
  }
}
