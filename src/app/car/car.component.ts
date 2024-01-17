import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  totalCost:number=0;
  From: string | undefined;
  To: number| undefined;
  Depart: number| undefined;
  Arrival: number | undefined;
  Travellers: string | undefined;

  formSubmitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updateTotalCost() {
    this.totalCost = this.Travellers === "1" ? 300 : 600;
  }

  submitForm() {
    if (
      this.From &&
      this.To !== undefined &&
      this.Depart !== undefined &&
      this.Arrival !== undefined &&
      this.Travellers
    ) {
      this.updateTotalCost();
      this.formSubmitted = true;
    }
     else {
      alert('fill the form');
    }
  }


}
