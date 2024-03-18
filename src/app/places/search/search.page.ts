import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  loadedPlaces!: Place[];

  constructor( private placesService: PlacesService,
    private menuCtrl: MenuController) 
    {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    console.log(this.loadedPlaces);
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }
}
