import { Movie } from 'src/app/pages/movies/interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ToastService } from 'src/app/pages/shared/toast/toast.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie!: Movie;
  private movieId = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private route: ActivatedRoute, 
    private moviesService: MoviesService,
    private toast: ToastService
    ) { }

  ngOnInit(): void { 

    this.moviesService
      .GetMovieById(this.movieId)
      .subscribe(res => {
        this.movie = res;
        console.log(this.movie);
      },
      err => this.toast.warning({mensagem: err.error.status_message})
      );
  }

}
