import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-temporizador',
  imports: [],
  templateUrl: './temporizador.html',
  styleUrl: './temporizador.css'
})
export class Temporizador implements OnInit {
  fechaLimite = new Date('2026-03-16T23:59:59Z');
  dias:any;
  horas:any;
  minutos:any;
  segundos:any;
ngOnInit() {
  this.mostrarTiempoRestante();
}
mostrarTiempoRestante(){
  const time=new Date();
  const diferencia = this.fechaLimite.getTime() - time.getTime();
   this.dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  this.horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  this.minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  this.segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  console.log(`Tiempo restante: ${this.dias}: ${this.horas}:${this.minutos}: ${this.segundos} `);
  setTimeout(() => this.mostrarTiempoRestante(), 1000);
  
  
  
}

}
