import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {

  @Input()
  selectedPlace!: Place;
  constructor(
    private modalctrl: ModalController
  ) { }

  ngOnInit() {}

  onCancel() {
    this.modalctrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalctrl.dismiss({message: 'message!'}, 'confirm');
  }
}
