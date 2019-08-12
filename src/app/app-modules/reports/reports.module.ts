
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReportsRoutes } from './reports.routing';
import { ReportsComponent } from './reports.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ReportsRoutes),
        FormsModule,
    ],
    declarations: [
        ReportsComponent,
    ],
    providers: []
})
export class ReportsModule { }