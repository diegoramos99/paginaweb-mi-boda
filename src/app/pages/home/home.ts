import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


 
export class Home {
  
ngOnInit() {
  // crear luciérnagas
for (let index = 0; index < 10; index++) {
  this.createFirefly()
  console.log(1);
  
}
setTimeout(()=>{
for (let index = 0; index < 20; index++) {
  this.createFirefly()
  console.log(2);
}
},5000)

setTimeout(()=>{
for (let index = 0; index < 20; index++) {
  this.createFirefly()
  console.log(3);
}
},13000)

setTimeout(()=>{
for (let index = 0; index < 30; index++) {
  this.createFirefly()
  console.log(4);
}
},20000)
} 

  createFirefly() {

      const firefly = document.createElement("div");
      const container=document.querySelector(".estrellas")
      container!.appendChild(firefly);
  
      // tamaño aleatorio
      const size = Math.random() * 30 + 2 + "px";
  firefly.style.width = size;
  firefly.style.height = size;
  // posición inicial aleatoria
  firefly.style.top = -20 + "vh";
  firefly.style.left = Math.random() * 100 + "vw";
  firefly.style.position="absolute"
  
  // destino aleatorio (con variables CSS)
  const x = (Math.random() - .5) * 200 + "px";
  const y =  121 + "vh";
  firefly.style.setProperty("--x", x);
  firefly.style.setProperty("--y", y);
  
  // animación de movimiento
  let velocidad=Math.random()*100;
  while (velocidad<10 || velocidad>40) {
    velocidad=Math.random()*100
    
  }
  const duracion=Math.random()*100
  firefly.style.animation = `flicker ${2 + Math.random() * 2}s infinite alternate  ,
  move   ${ velocidad}s infinite ease  `;
  
  firefly.classList.add("firefly");
  
  
  return firefly;
  
  }
  
  // generar varias luciérnagas
}


