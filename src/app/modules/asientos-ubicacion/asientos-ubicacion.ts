import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Input } from '@angular/core';
@Component({
  selector: 'app-asientos-ubicacion',
  imports: [CommonModule],
  templateUrl: './asientos-ubicacion.html',
  styleUrl: './asientos-ubicacion.css'
})
export class AsientosUbicacion {
  @Input() nombre: string = '';



  ngOnChanges() {
    if (this.nombre) {
      const mesas = document.querySelectorAll('.mesa') as NodeListOf<HTMLElement>;
      mesas.forEach(mesa => {
        mesa.classList.remove('pulso');
      })
      localStorage.setItem('nombreInvitado', this.nombre!);

      let nombreBuscado = localStorage.getItem('nombreInvitado');
      nombreBuscado = nombreBuscado!.toLocaleLowerCase().replace(/\b\w/g, c => c.toUpperCase()).trim();
      this.mesas.forEach(mesa => {
        for (let index = 0; index < mesa.invitados.length; index++) {
          const nombreDivididoDeInvitados = mesa.invitados[index].split(" ");
          const nombreCompletoInvitado = mesa.invitados[index];
          const nombreCompletoInvertido = nombreCompletoInvitado.split(" ").reverse().join(" ");
          console.log(nombreDivididoDeInvitados + " - " + nombreBuscado);
          console.log(nombreCompletoInvitado + " - " + nombreBuscado);
          console.log(nombreCompletoInvertido + " - " + nombreBuscado);


          if (nombreDivididoDeInvitados[0].includes(nombreBuscado!) || nombreDivididoDeInvitados[1].includes(nombreBuscado!) || nombreCompletoInvitado.includes(nombreBuscado!) || nombreCompletoInvertido.includes(nombreBuscado!)) {
            const elementoMesa = document.querySelector(`.mes${mesa.numero}`) as HTMLElement;
            elementoMesa.classList.add('pulso');
          }
        }
      }
      )
    }
  }
  ngOnInit() {

    Swal.fire({
      title: 'Bienvenido 🎉',
      text: 'Bienvenido a la sección de asientos. Aquí podrás ver la distribución de los asientos para el evento. Por favor, revisa tu asignación y si tienes alguna pregunta, no dudes en contactarnos. ¡Gracias por ser parte de este día especial!',
      icon: 'info',
      confirmButtonText: 'Entendido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown '
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__slow	'
      }
    });

  }

  mesas = [{
    numero: 1,
    invitados: ["Arce Monica",
      "Cejas Amadeo",
      "Gramajo Fernando",
      "Gramajo Mayra",
      "Ziegler Lucas",
      "Ziegler Francisco",
      "gutierrez Margarita"]
  },
  {
    numero: 2,
    invitados: ["Mamani Celina",
      "Caballero Roma",
      "Ramos Maricruz",
      "Frete Fabiana",
      "Ramos Maria",
      "Ramos Mariana",
      "Ramos Marcela",
      "Medina Luis",
      "Vargas Gabriel",
      "Acuña Mailiy"]
  },
  {
    numero: 3,
    invitados: [
      "Arce Laura",
      "Arce Luisa",
      "Perez Sebastian",
      "Perez Bianca",
      "Arce Maria Estela",
      "Piutrin Yesica",
      "Rojas Nehemías",
      "Arce Julio",
      "Arce Marta",]
  },
  {
    numero: 4,
    invitados: [
"Cejas Benita",
"Cejas Vitalio",
"Cejas Lorena",
"Carrizo Diego",
"Carrizo Francisco",
"Cejas Ariel",
"Cejas Hector",]
  },
  {
    numero: 5,
    invitados: [
"Cejas Julio",
"Cejas Veronica",
"Carrizo Jazmin",
"Carrizo Dalila",
"Cejas Ivanna",
"Chazarreta Lucas",
"Moreira Nadia Abril",
"Chazarreta Juliana",
"Perez Nicolas",
"Piutrin Luna",]
  },
  {
    numero: 6,
    invitados: [
"Gonzalez Lucila",
"Migliavacca Camila",
"Risso Lucas",
"Mercado Nadia",
"Medina Thomas",
"Veraa Micaela",
"Alfonso Santiago",
"Rodriguez Angela",
"Diaz Ariel",
"Agüero Sol",] 
  },
  {
    numero: 7,
    invitados: [

"Diaz Santiago.",
"Torres Jessica",
"Leguero Axel",
"Romero Santiago",
"(Camila su novia)",
"Lillia Lucas",]
  }]

  cartelVisible = false;
  cartelX = 0;
  cartelY = 0;
  invitadosSeleccionados: string[] = [];

  mostrarCartel(event: MouseEvent, invitados: string[]) {


    this.invitadosSeleccionados = invitados;
    this.cartelVisible = true;
    setTimeout(() => {
      let nombre = localStorage.getItem('nombreInvitado');
      nombre = nombre!.toLocaleLowerCase().replace(/\b\w/g, c => c.toUpperCase()).trim();
      //

      let ul = document.querySelector('.list-unstyled') as HTMLElement;
      const li = ul.querySelectorAll('li') as NodeListOf<HTMLElement>;
      for (let index = 0; index < li.length; index++) {
        let nombreLi = li[index].textContent;
        let nombreDividido = nombreLi!.split(" ");
        let nombreCompleto = nombreLi!;
        let nombreCompletoInvertido = nombreDividido.reverse().join(" ");


        if (nombreDividido[0].includes(nombre!) || nombreDividido[1].includes(nombre!) || nombreCompleto.includes(nombre!) || nombreCompletoInvertido.includes(nombre!)) {
          li[index].style.fontWeight = 'bold';
          li[index].style.color = 'white';
          li[index].style.backgroundColor = 'rgba(53, 145, 64, 0.476)';
          li[index].style.borderRadius = '5px';
          li[index].style.padding = '2px 5px';
          li[index].style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
          li[index].style.marginBottom = '2px';
        }
      }
    }, 0);
  }
  mesaCleck(event: MouseEvent) {
    event.stopPropagation(); // Evita que el clic se propague al contenedor padre
  }
  cerrarCartel() {
    this.cartelVisible = false;
  }
}
