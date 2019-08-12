
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ParkingComponent } from './parking.component';
import { ParkingRoutes } from './parking.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ParkingRoutes),
        FormsModule,
    ],
    declarations: [
        ParkingComponent,
    ],
    providers: []
})
export class ParkingModule { }