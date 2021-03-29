import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as MoviesActions from './movies.actions';
import { MoviesApiService } from '../services/movies-api.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
@Injectable()
export class MoviesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.init),
      mergeMap(() =>
        this.moviesApi.getMovies().pipe(
          map((movies) => MoviesActions.loadMoviesSuccess({ movies })),
          catchError(() => MoviesActions.loadMoviesFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private moviesApi: MoviesApiService) {}
}
