import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './core/header/header';
import { Asistencia } from './pages/asistencia/asistencia';
import { Ubicacion } from './pages/ubicacion/ubicacion';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home , RouterLink, RouterLinkActive, Header,Asistencia,Ubicacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'web-mi-boda';
}
