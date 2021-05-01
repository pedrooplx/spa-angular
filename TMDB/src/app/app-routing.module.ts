import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/movies/components/main/main.component';
import { Err404Component } from './pages/shared/errors/err404/err404.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path:'home', component: MainComponent },
  { path: '404', component: Err404Component },
  { path: '**', redirectTo: '/404' }
];

export const Routers = RouterModule.forRoot(routes);