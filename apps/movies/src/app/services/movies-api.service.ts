import { Injectable } from '@angular/core';
import { Movie } from '@production-angular/data-models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  public movies: Movie[] = [
    {
      id: 0,
      name: 'Avengers - Infinity War',
      url: 'https://www.imdb.com/title/tt4154756/',
      imageUrl: 'https://tinyurl.com/vy5hn9s',
      rating: 8.9,
      director: 'Anthony Russo, Joe Russo',
      cast: ['Robert Downey Jr', 'Chris Hemsworth', 'Mark Ruffalo'],
    },
    {
      id: 1,
      name: 'Avengers - End Game',
      url: 'https://www.imdb.com/title/tt4154796/',
      imageUrl: 'https://tinyurl.com/55xhean8',
      rating: 9,
      director: 'Anthony Russo, Joe Russo',
      cast: ['Robert Downey Jr', 'Chris Hemsworth', 'Mark Ruffalo'],
    },
  ];

  constructor() {}

  getMovies() {
    return of(this.movies);
  }
}
