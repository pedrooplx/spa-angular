export interface Movie{
    id: number;
    adult: boolean;
    backdrop_path: string;
    budget: number;
    homepage: string;
    genre: Genre[];
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    spoken_languages: Language[];
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

interface Genre{
    id: number;
    name: string;
}

interface Language{
    iso_639_1: string;
    name: string;
}

export interface MoviesResponse{
    results: Movie[];
}