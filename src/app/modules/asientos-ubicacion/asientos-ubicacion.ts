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
          
          
          if (nombreDivididoDeInvitados[0].includes(nombreBuscado!) || nombreDivididoDeInvitados[1].includes(nombreBuscado!)|| nombreCompletoInvitado.includes(nombreBuscado!)|| nombreCompletoInvertido.includes(nombreBuscado!)) {
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
      "Gonzalez Lucila",
      "Rodriguez Angela",
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
      

        if (nombreDividido[0].includes(nombre!) || nombreDividido[1].includes(nombre!)|| nombreCompleto.includes(nombre!)|| nombreCompletoInvertido.includes(nombre!)) {
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
