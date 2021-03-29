import { Injectable, Injector } from '@angular/core';
import { MoviesStoreService } from './movies-store.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacadeService {
  private _moviesStore;

  constructor(public injector: Injector) {}

  get moviesStore(): MoviesStoreService {
    if (!this._moviesStore) {
      this._moviesStore = this.injector.get(MoviesStoreService);
    }
    return this._moviesStore;
  }

  loadMovies(){
    this.moviesStore.loadMovies();
  }
}
