import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  
  place!: Place;
  placeId!: string;

  constructor(
    private route: ActivatedRoute,
    private navctrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navctrl.navigateBack(['/places/tabs/offers']);
        return;
      }

      this.placeId = paramMap.get('placeId') ?? this.placeId;
      // console.log(this.placesService.getPlace(paramMap.get('placeId')));
      this.place = this.placesService.getPlace(this.placeId);
    });
  }
}
