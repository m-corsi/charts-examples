import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppComponent } from './app.component';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { GoogleChartsComponent } from './google-charts/google-charts.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    ApexChartsComponent,
    GoogleChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
