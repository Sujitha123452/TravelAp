import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { FlightComponent } from './flight/flight.component';
import { CarComponent } from './car/car.component';
import { BusComponent } from './bus/bus.component';

const routes: Routes = [
  {
    path:'flight',
    component:FlightComponent,
  },
  {
    path:'bus',
    component:BusComponent,
  },
  {
    path:'car',
    component:CarComponent,
  },
  {
    path:'hotel',
    component:HotelComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
