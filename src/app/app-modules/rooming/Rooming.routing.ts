import { Routes, RouterModule } from '@angular/router';
import { RoomingComponent } from './rooming.component';

export const RoomingRoutes: Routes = [
  {
      path: '',
      children: [
        {
          path: 'rooming',
          component: RoomingComponent
      }
      ]
  }
];


