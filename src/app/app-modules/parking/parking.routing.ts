import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './parking.component';

export const ParkingRoutes: Routes = [
  {
      path: '',
      children: [
        {
          path: 'parking',
          component: ParkingComponent
      }
      ]
  }
];


