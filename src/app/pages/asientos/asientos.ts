import { Component } from '@angular/core';
import { AsientosUbicacion } from '../../modules/asientos-ubicacion/asientos-ubicacion';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-asientos',
  imports: [AsientosUbicacion],
  templateUrl: './asientos.html',
  styleUrl: './asientos.css'
})
export class Asientos {
  nombreInvitado:string = '';
  async mostrarPopup () {
  const { value: nombreElegido } = await Swal.fire({
  title: 'busca tu asiento',
  input: "text",
  inputPlaceholder: "primer nombre y apellido",
  text: 'Por favor, introduce tu nombre y apellido para encontrar tu asiento asignado.',
  icon: 'info',
  confirmButtonText: 'Buscar',
  showClass: {
    popup: 'animate__animated animate__backInUp' // entra rebotando
  },
  hideClass: {
    popup: 'animate__animated animate__backOutUp' // se va hacia arriba
  },
  inputAttributes: {
    "aria-label": "Type your message here"
  },});
this.nombreInvitado=nombreElegido||'';
return nombreElegido;
}

}