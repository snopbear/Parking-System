import { Routes, RouterModule } from '@angular/router';
import { ParkingSlotComponent } from './parking-slot.component';


export const ParkingSlotRoutes: Routes = [
  {
      path: '',
      children: [
        {
          path: 'parkingSlot',
          component: ParkingSlotComponent
      }
      ]
  }
];


