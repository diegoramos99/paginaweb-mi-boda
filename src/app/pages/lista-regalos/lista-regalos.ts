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
  regalos:any=[];

  async ngOnInit() {
    const text =this.regalosService.getRegalos().subscribe( text => {
      
     text.forEach((regalo:any) => {
        const regaloBuscado = regalo["  🎁 ¿Ya tenés pensado el regalo ideal?"];
      if (regaloBuscado!="" && regaloBuscado!="💸 Aporte económico (el clásico pero nunca falla 💕)"&&regaloBuscado!="😣aun no lo pense" ) {
        
        this.regaloSeleccionado.push(regalo["  🎁 ¿Ya tenés pensado el regalo ideal?"]);
        this.compartido.push(regalo["tu regalo es compartido con otro invitado?"]);
        this.regalos.push({
            nombre: regalo["Nombre y apellido:"],
            regalo: regalo["  🎁 ¿Ya tenés pensado el regalo ideal?"],
            esCompratido:regalo["tu regalo es compartido con otro invitado?"],
            conQuienComparte: regalo["¿Con quién compartis tu regalo?"],
        });
      }
      
  })
  console.log(this.regalos);
  
})
}
compartidoPor(indice:any){
const regalosCompartido=this.regalos[indice].conQuienComparte;
return regalosCompartido +" , " + this.regalos[indice].nombre;
 
};


ngAfterViewInit()  {
  setTimeout(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {new boostrap.Tooltip(tooltipTriggerEl)});
    
  }, 1000);
  }
}
