import { RouterModule, Routes } from '@angular/router';
import { MoviesHomeComponent } from './pages/movies/movies-home/movies-home.component';

const routes: Routes = [
  { path: '', component: MoviesHomeComponent, pathMatch: 'full' },
  { path:'home', component: MoviesHomeComponent }
];

export const Routers = RouterModule.forRoot(routes);