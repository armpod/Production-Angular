import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { MoviesEffects } from './movies.effects';
import * as MoviesActions from './movies.actions';

describe('MoviesEffects', () => {
  let actions: Observable<any>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        MoviesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MoviesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MoviesActions.init() });

      const expected = hot('-a-|', {
        a: MoviesActions.loadMoviesSuccess({ movies: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
