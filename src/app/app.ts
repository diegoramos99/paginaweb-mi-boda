import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Home } from "./pages/home/home";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './core/header/header';
import { Asistencia } from './pages/asistencia/asistencia';
import { Ubicacion } from './pages/ubicacion/ubicacion';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Footer } from './core/footer/footer';
import { Asientos } from './pages/asientos/asientos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home , RouterLink, RouterLinkActive, Header,Asistencia,Ubicacion,Footer,Asientos],
  templateUrl: './app.html',
  styleUrl: './app.css',
   animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class App {
  protected title = 'web-mi-boda';
  vistas = ['/home', '/asistencia', '/asientos', '/ubicacion'];
  indiceActual = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  // Detecta swipe desde HammerJS manualmente
  ngAfterViewInit() {
    const hammer = new Hammer(document.body);
    hammer.on('swipeleft', () => this.onSwipeLeft());
    hammer.on('swiperight', () => this.onSwipeRight());
    
  }
  
  onSwipeLeft() {
    console.log("para la izquierda");
    
    this.indiceActual=this.vistas.indexOf(this.router.url);
    if (this.indiceActual < this.vistas.length - 1) {
      this.indiceActual++;
      this.router.navigate([this.vistas[this.indiceActual]]);
    }
  
  }

  onSwipeRight() {
    console.log("para la derecha");
        this.indiceActual=this.vistas.indexOf(this.router.url);
    if (this.indiceActual > 0) {
      this.indiceActual--;
      this.router.navigate([this.vistas[this.indiceActual]]);
    }
    console.log(this.indiceActual);
    
  }
}
