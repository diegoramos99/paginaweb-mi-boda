import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-invitacion',
  imports: [RouterLink],
  templateUrl: './invitacion.html',
  styleUrl: './invitacion.css'
})
export class Invitacion {

   isOpen = false;

  toggleEnvelope() {

    this.isOpen = !this.isOpen;

    console.log("Sobre abierto:", this.isOpen);

  }




}
