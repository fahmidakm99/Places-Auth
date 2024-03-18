import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
 
 place!: Place;
 placeId!: string;
 
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalctrl: ModalController
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack(['/places/tabs/search']);
        return;
      }

      this.placeId = paramMap.get('placeId') ?? this.placeId;
      // console.log(this.placesService.getPlace(paramMap.get('placeId')));
      this.place = this.placesService.getPlace(this.placeId);
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/search');
    // this.navCtrl.pop(); in case of delete can use where we are sure about emptiness of stack
    // this.navCtrl.navigateBack('/places/tabs/search');
    this.modalctrl
        .create({ 
          component: CreateBookingComponent, 
          componentProps: 
          {selectedPlace: this.place} 
         
        })
        .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if( resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
      
    })
  }
}
