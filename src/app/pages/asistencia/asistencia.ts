import { Component } from '@angular/core';
import { Formulario } from '../../modules/formulario/formulario';
import{ Temporizador } from '../../modules/temporizador/temporizador';

@Component({
  selector: 'app-asistencia',
  imports: [Formulario, Temporizador],
  templateUrl: './asistencia.html',
  styleUrl: './asistencia.css'
})
export class Asistencia {

}
