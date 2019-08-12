import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates.component';


export const RatesRoutes: Routes = [
  {
      path: '',
      children: [
        {
          path: 'rates',
          component: RatesComponent
      }
      ]
  }
];


