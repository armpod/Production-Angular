import { Component, OnInit } from '@angular/core';
import { Movie } from '@production-angular/data-models';
import { Observable } from 'rxjs';
import { MoviesFacadeService } from './services/movies-facade.service';

@Component({
  selector: 'production-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allMovies$: Observable<Movie[]> = this.moviesFacade.moviesStore.allMovies$;

  constructor(public moviesFacade: MoviesFacadeService) {}

  ngOnInit() {
    this.moviesFacade.loadMovies();
  }
}
