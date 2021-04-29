import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/pages/movies/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  @Input() movie!: Movie;

  ngOnInit(): void {

  }
}
