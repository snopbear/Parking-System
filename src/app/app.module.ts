import { AppRoutes } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { NavComponent } from './partials/nav/nav.component';
import { RouterModule } from '@angular/router';
import { RoomingModule } from './app-modules/rooming/Rooming.module';
import { ReportsModule } from './app-modules/reports/reports.module';
import { RatesModule } from './app-modules/rates/rates.module';
import { ParkingSlotModule } from './app-modules/parking-slot/parking-slot.module';
import { ParkingModule } from './app-modules/parking/parking.module';
import { DashboardModule } from './app-modules/dashboard/dashboard.module';
import { CategoryModule } from './app-modules/category/category.module';
import { HttpClientModule } from '@angular/common/http'; 
import { Sorter } from './infrastructure/core/sorter/sorter';
import { DataFilterService } from './infrastructure/core/data-filter/data-filter.service';
import { TrackByService } from './infrastructure/core/tracker/trackby.service';
import { AlertifyService } from './infrastructure/core/alertify-configurations/alertify.service';
import { CoreModule } from './infrastructure/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    RoomingModule,
    ReportsModule,
    RatesModule,
    ParkingSlotModule,
    ParkingModule,
    DashboardModule,
    CategoryModule,
    CoreModule
  ],
  providers: [
    Sorter,
    DataFilterService,
    TrackByService, AlertifyService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
