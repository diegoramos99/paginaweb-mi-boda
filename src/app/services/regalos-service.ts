import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegalosService {
  private urlRegalo = "1LkfajHi0yDLNNDekTJAICrlFRU_OE44tm-CBrZcyVhA";
  constructor( private http :HttpClient ) { }


  getRegalos(){
  const url = `https://docs.google.com/spreadsheets/d/${this.urlRegalo}/export?format=csv`;
    return this.http.get(url, {responseType: 'text'});
  }
}
