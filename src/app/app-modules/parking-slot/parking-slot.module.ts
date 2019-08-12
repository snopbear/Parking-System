
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParkingSlotRoutes } from './parking-slot.routing';
import { NgModule } from '@angular/core';
import { ParkingSlotComponent } from './parking-slot.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ParkingSlotRoutes),
        FormsModule,
    ],
    declarations: [
        ParkingSlotComponent,
    ],
    providers: []
})
export class ParkingSlotModule { }