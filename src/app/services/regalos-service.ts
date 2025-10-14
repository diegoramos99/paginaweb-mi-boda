import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import *  as Papa from 'papaparse';
@Injectable({
  providedIn: 'root'
})
export class RegalosService {
  private urlRegalo = "1LkfajHi0yDLNNDekTJAICrlFRU_OE44tm-CBrZcyVhA";
  constructor( private http :HttpClient ) { }


  getRegalos() {
    const url = `https://docs.google.com/spreadsheets/d/${this.urlRegalo}/export?format=csv`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      
      map(csvText => {
        console.log(csvText);
        
        const parsed = Papa.parse(csvText, { header: true });
        return parsed.data; // Te devuelve un array de objetos
      })
    );
  }
}
