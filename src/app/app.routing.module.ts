import { DashboardComponent } from './app-modules/dashboard/dashboard.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full' },  // notice the redirectTo: "home" (lacks a slash)
    {
        path: '',
        children: [
            { path: 'dashboard', loadChildren: './app-modules/dashboard/dashboard.module#DashboardModule' },
            { path: 'category', loadChildren: './app-modules/category/category.module#CategoryModule' },
            { path: 'parking', loadChildren: './app-modules/parking/parking.module#ParkingModule' },
            { path: 'parkingSlot', loadChildren: './app-modules/parking-slot/parking-slot.module#ParkingSlotModule' },
            { path: 'rates', loadChildren: './app-modules/rates/rates.module#RatesModule' },
            { path: 'reports', loadChildren: './app-modules/reports/reports.module#ReportsModule' },
            { path: 'rooming', loadChildren: './app-modules/rooming/Rooming.module#RoomingModule' }
        ]
    },
    { path: '**', component: NotFoundComponent }

];


