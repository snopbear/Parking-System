
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatesRoutes } from './rates.routing';
import { NgModule } from '@angular/core';
import { RatesComponent } from './rates.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(RatesRoutes),
        FormsModule,
    ],
    declarations: [
        RatesComponent,
    ],
    providers: []
})
export class RatesModule { }