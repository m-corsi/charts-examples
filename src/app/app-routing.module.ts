import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as ApexCharts from 'apexcharts';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { AppModule } from './app.module';
import { GoogleChartsComponent } from './google-charts/google-charts.component';

const routes: Routes = [
  {path: 'apex-charts', component: ApexChartsComponent},
  {path: 'google-charts', component: GoogleChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
