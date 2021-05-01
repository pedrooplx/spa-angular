import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { MoviesResponse } from '../interfaces/movie';
import { Constants } from "src/app/api/Constants";

@Injectable()
export class MoviesService {

    constructor(private http: HttpClient){ }

    GetTopRatedMovies() : Observable<MoviesResponse>{
        return this.http.get<MoviesResponse>(`${Constants.baseUri}movie/top_rated?api_key=${Constants.api_key}`);
    }
}