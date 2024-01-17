import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  totalCost:number=0;
  From: string | undefined;
  To: number| undefined;
  Depart: number| undefined;
  Arrival: number | undefined;
  Travellers: string | undefined;
  Class: string | undefined;

  formSubmitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  updateTotalCost() {
    this.totalCost = this.Class === 'Economic' ? 10000 : 20000;
  }

  submitForm() {
    if (
      this.From &&
      this.To !== undefined &&
      this.Depart !== undefined &&
      this.Arrival !== undefined &&
      this.Travellers !== undefined &&
      this.Class
    ) {
      this.updateTotalCost();
      this.formSubmitted = true;
    }
     else {
      alert('fill the form');
    }
  }

}
