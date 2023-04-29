import { Injectable } from '@angular/core';
interface City {
  place: string;
  latitude: number;
  longitude: number;
  status:string;
}

interface CityMap {
  [key: string]: City[];
}


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }
  private city: CityMap = {
    "hyderabad": [{ "place": "Hitech city", "latitude": 17.45086695858829,"longitude": 78.3813275805844,"status":"assigned" },
    { "place": "Banjara Hills", "latitude": 17.415243979615692,"longitude":78.44877172351569,"status":"not assigned" },
    { "place": "Secunderabad", "latitude": 17.432675385053855,"longitude":78.50282440776512,"status":"assigned"  }],
    "delhi": [{ "place": "Chandni Chowk", "latitude": 28.65862365135241,"longitude": 77.24096337972398,"status":"assigned"  },
    { "place": "Dwarka", "latitude": 28.60812229502126,"longitude":76.98878948284431,"status":"assigned"  },
    { "place": "Rajiv Chowk", "latitude": 28.63318291538235, "longitude":77.2194815358957,"status":"not assigned"  }],
    "mumbai": [{ "place": "Panvel", "latitude": 17.448901821189565, "longitude": 78.3831300249565,"status":"assigned"  },
    { "place": "Bandra", "latitude": 19.068000361369904, "longitude": 72.86474765979386,"status":"assigned" },
    { "place": "Marine Drive", "latitude": 18.93370350262381, "longitude": 72.82677469109942,"status":"assigned"  }],
    "banglore": [{ "place": "Marathalli", "latitude": 12.956591087357484, "longitude": 77.70139406921594,"status":"assigned"  },
    { "place": "Kundanhalli", "latitude": 12.966521188436024,"longitude":  77.71768886086402,"status":"assigned"  },
    { "place": "Electronic city", "latitude": 12.839519965663037,  "longitude": 77.66072272762864 ,"status":"not assigned" }]
  };

  getCity(cityName: string): City[] {
    return this.city[cityName];
  }
}
