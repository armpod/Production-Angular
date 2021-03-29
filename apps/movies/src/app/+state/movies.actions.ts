import { createAction, props } from '@ngrx/store';
import { Movie } from '@production-angular/data-models';

export const init = createAction('[Movies Page] Init');

export const loadMoviesSuccess = createAction(
  '[Movies/API] Load Movies Success',
  props<{ movies: Movie[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies/API] Load Movies Failure',
  props<{ error: any }>()
);
