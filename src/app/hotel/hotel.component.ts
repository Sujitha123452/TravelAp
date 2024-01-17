import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  totalCost:number=0;
  selectedRoom: string | undefined;
  selectedRoomNo: number| undefined;
  selectedPerson: number| undefined;
  selectedChildren: number | undefined;
  selectedFacilities: string | undefined;
  formSubmitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  updateTotalCost() {
    this.totalCost = this.selectedFacilities === 'yes' ? 3000 : 6000;
  }

  submitForm() {
    if (
      this.selectedRoom &&
      this.selectedRoomNo !== undefined &&
      this.selectedPerson !== undefined &&
      this.selectedChildren !== undefined &&
      this.selectedFacilities
    ) {
      this.updateTotalCost();
      this.formSubmitted = true;
    }
     else {
      alert('fill the form');
    }
  }
}
