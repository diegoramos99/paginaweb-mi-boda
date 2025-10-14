import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegalosService } from '../../services/regalos-service';
import{AfterViewInit} from '@angular/core'
import * as boostrap from 'bootstrap';


@Component({
  selector: 'app-lista-regalos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './lista-regalos.html',
  styleUrl: './lista-regalos.css'
})
export class ListaRegalos implements OnInit , AfterViewInit {

  constructor(private regalosService: RegalosService ) {}
  regaloSeleccionado:any=[];
  compartido:any=[];
  regalos:any=[this.regaloSeleccionado, this.compartido];
  
  async ngOnInit() {
    // Aquí iría la llamada al servicio para obtener los datos
    const text =this.regalosService.getRegalos().subscribe( text => {
      console.log(text);
      
     text.forEach((regalo:any) => {
       if (regalo["  🎁 ¿Ya tenés pensado el regalo ideal?"] != "😣aun no lo pense") {
      this.regaloSeleccionado.push(regalo["  🎁 ¿Ya tenés pensado el regalo ideal?"]);
      }
      this.compartido.push(regalo["tu regalo es compartido con otro invitado?"]);
      
  })
  console.log(this.compartido);
  
})
}
ngAfterViewInit()  {
  setTimeout(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {new boostrap.Tooltip(tooltipTriggerEl)});
    
  }, 1000);
  }
}
