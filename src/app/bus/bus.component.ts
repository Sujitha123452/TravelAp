import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
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
    this.totalCost = this.Travellers === "1" ? 50 : 100;
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
