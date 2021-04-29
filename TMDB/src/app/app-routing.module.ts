import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/movies/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path:'home', component: IndexComponent }
];

export const Routers = RouterModule.forRoot(routes);