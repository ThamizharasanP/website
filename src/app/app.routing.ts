import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

export const routing = RouterModule.forRoot(routes, { useHash: false });