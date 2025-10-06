import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegalosService } from '../../services/regalos-service';


@Component({
  selector: 'app-lista-regalos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './lista-regalos.html',
  styleUrl: './lista-regalos.css'
})
export class ListaRegalos implements OnInit {

  constructor(private regalosService: RegalosService ) {}
  regalos:any=[];
  
  async ngOnInit() {
    // Aquí iría la llamada al servicio para obtener los datos
    const text =this.regalosService.getRegalos().subscribe( text => {
     text.forEach((regalo:any) => {
      this.regalos.push(regalo["  🎁 ¿Ya tenés pensado el regalo ideal?"]);
    
  
  })
})
}
}
