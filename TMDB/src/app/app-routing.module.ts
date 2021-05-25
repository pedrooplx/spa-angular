import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/movies/components/main/main.component';
import { MovieDetailsComponent } from './pages/movies/components/movie-details/movie-details.component';
import { Err404Component } from './pages/shared/errors/err404/err404.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path:'home', component: MainComponent },
  { path: '404', component: Err404Component },
  { path: 'details/:id', component: MovieDetailsComponent },
  { path: '**', redirectTo: '/404' }
];

export const Routers = RouterModule.forRoot(routes);