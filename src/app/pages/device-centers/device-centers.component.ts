import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-device-centers',
  templateUrl: './device-centers.component.html',
  styleUrls: ['./device-centers.component.scss']
})
export class DeviceCentersComponent implements OnInit {
  toggle: boolean = false;
  public citySelected: string = "";
  public selectedPlace: any[] = [];
  constructor(private citiesService:CitiesService ) { }

  

  ngOnInit(): void {
  }
  searchBtn() {
    this.toggle = !this.toggle;
  }
  dropdownSelected(event: any) {
    let citySelected=event.target.id;
    this.selectedPlace = this.citiesService.getCity(citySelected);
    this.toggle =false;
  }


}
