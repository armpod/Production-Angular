import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '@production-angular/data-models';
import { select, Store } from '@ngrx/store';
import * as MovieSelectors from '../+state/movies.selectors';
import * as MovieActions from '../+state/movies.actions';

@Injectable({
  providedIn: 'root',
})
export class MoviesStoreService {
  allMovies$ = this.store.pipe(select(MovieSelectors.getAllMovies));

  constructor(private store: Store) {}

  loadMovies() {
    this.store.dispatch(MovieActions.init());
  }
}
