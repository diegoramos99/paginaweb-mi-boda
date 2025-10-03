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
      const rows = text.split('\n');
      const headers = rows[3].split(',' );
     
      
      
      for (let index = 2; index < rows.length; index++) {
        const fila = rows[index];
        console.log(fila);
        
        const columnas= fila.split(/,(?!\s)/); 
        for (let index = 0; index < columnas.length; index++) {
          console.log(columnas[index]);          
        }
        this.regalos.push(columnas[9]);
        
         
          
      }
    });
    
  
  }
}
