import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-asientos-ubicacion',
  imports: [CommonModule],
  templateUrl: './asientos-ubicacion.html',
  styleUrl: './asientos-ubicacion.css'
})
export class AsientosUbicacion {

  mesas = [{
    numero: 1,
    invitados: ["Arce Monica",
      "Cejas Amadeo",
      "Cejas Julio",
      "Cejas Veronica",
      "Gramajo Fernando",
      "Gramajo Mayra",
      "Ziegler Lucas",
      "Ziegler Francisco",
      "Cejas Benita",
      "Cejas Vitalio",
      "Cejas Lorena",]
  },
  {
    numero: 2,
    invitados: ["Carrizo Diego",
      "Carrizo Jazmín",
      "Carrizo Dalila",
      "Carrizo Francisco",
      "Diaz Ariel",
      "Cejas Ariel",
      "Cejas Ivanna",
      "Cejas Hector",
      "Arce Laura",
      "Chazarreta Lucas",
      "Chazarreta Juliana",]
  },
  {
    numero: 3,
    invitados: ["Arce Luisa",
      "Perez Sebastian",
      "Perez Bianca",
      "Perez Nicolas",
      "Arce Maria Estela",
      "Piutrin Luna",
      "Piutrin Yesica",
      "Rojas Nehemías",
      "Arce Julio",
      "Arce Marta",
      "Gutierrez Margarita",]
  },
  {
    numero: 4,
    invitados: ["Gramajo Ariel",
      "Su mujer",
      "Su hijo",
      "Mamani Celina",
      "Caballero Roma",
      "Ramos Maricruz",
      "Frete Fabiana",
      "Ramos Maria",
      "Ramos Mariana",
      "Ramos Marcela",
      "Medina Luis",]
  },
  {
    numero: 5,
    invitados: ["Vargas Gabriel",
      "Acuña Maily",
      "González Lucila",
      "Rodríguez Angela",
      "Vera Micaela",
      "Migliavacca Camila"]
  },
  {
    numero: 6,
    invitados: ["Diaz Santiago",
      "Torres Jessica",
      "Leguero Axel",
      "Romero Santiago",
      "(Su novia)", "Lillia Lucas"]
  },
  {
    numero: 7,
    invitados: ["Cáceres Sol",
      "Castillo Matías",
      "Da Cruz Patricia",
      "Zapata Micaela",]
  }]

   cartelVisible = false;
  cartelX = 0;
  cartelY = 0;
  invitadosSeleccionados: string[] = [];

  mostrarCartel(event: MouseEvent, invitados: string[]) {

    const elemento = event.currentTarget as HTMLElement;
    const rect = elemento.getBoundingClientRect();

    this.cartelX = rect.right + 10; // cartel aparece a la derecha de la mesa
    this.cartelY = rect.top;

    this.invitadosSeleccionados = invitados;
    this.cartelVisible = true;
  }
  mesaCleck(event: MouseEvent) {
    event.stopPropagation(); // Evita que el clic se propague al contenedor padre
  }
   cerrarCartel() {
    this.cartelVisible = false;
  }

}
