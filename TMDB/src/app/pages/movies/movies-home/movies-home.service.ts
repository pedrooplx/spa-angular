import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Movie } from './../interfaces/movie';
import { Constants } from "src/app/api/Constants";

@Injectable()
export class MoviesHomeService {

    constructor(private http: HttpClient){ }

    GetTopRatedMovies() : Observable<Movie[]>{
        console.log(Constants.baseUri + 'movie/top_rated' + Constants.keyUri);
        return this.http.get<Movie[]>(Constants.baseUri + 'movie/top_rated' + `?api_key=${Constants.api_key}`);
        return this.http.get<Movie[]>(`${Constants.baseUri}movie/top_rated?api_key=${Constants.api_key}`);
    }
}