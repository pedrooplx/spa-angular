import { RouterModule, Routes } from '@angular/router';
import { MoviesHomeComponent } from './pages/movies/movies-home/movies-home.component';
import { Err404Component } from './shared/errors/err404/err404.component';

const routes: Routes = [
  { path: '', component: MoviesHomeComponent, pathMatch: 'full' },
  { path:'home', component: MoviesHomeComponent },
  { path: '404', component: Err404Component },
  { path: '**', redirectTo: '/404' }
];

export const Routers = RouterModule.forRoot(routes);