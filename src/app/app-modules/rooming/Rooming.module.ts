
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoomingComponent } from './rooming.component';
import { RoomingRoutes } from './Rooming.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RoomingRoutes),
        FormsModule,
    ],
    declarations: [
        RoomingComponent,
    ],
    providers: []
})
export class RoomingModule { }