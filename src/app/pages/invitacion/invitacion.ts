import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-invitacion',
  imports: [RouterLink],
  templateUrl: './invitacion.html',
  styleUrl: './invitacion.css'
})
export class Invitacion implements OnInit {

invitados: any = {
    '1': { nombre: 'MONICA, AMADEO, JULIO, VERONICA, FERNANDO' },
'2': { nombre: 'MAYRA, LUCAS, FRANCISCO, NICOLAS' },
'3': { nombre: 'BENITA, VITALIO' },
'4': { nombre: 'LORENA, DIEGO, FRANCISCO, JAZMIN, DALILA' },
'5': { nombre: 'ARIEL, IVANNA, HECTOR' },
'6': { nombre: 'LAURA, JULIANA' },
'7': { nombre: 'LUCAS, ABRIL, CIELO' },
'8': { nombre: 'MARTA, JULIO' },
'9': { nombre: 'LUISA, SEBASTIAN, NICOLAS, BIANCA' },
'10': { nombre: 'MARIA, LUNA' },
'11': { nombre: 'YESICA, NEHEMIAS' },
'12': { nombre: 'MILAGROS, ARIEL' },
'13': { nombre: 'CELINA, ROMA' },
'14': { nombre: 'MARICRUZ, LA GORDITA' },
'15': { nombre: 'MARIANA, MARCELA' },
'16': { nombre: 'MARIA' },
'17': { nombre: 'SONRRI' },
'18': { nombre: 'CAMILA, LUCAS' },
'19': { nombre: 'NADIA, TOMAS' },
'20': { nombre: 'ANGELA' },
'21': { nombre: 'LUCILA' },
'22': { nombre: 'NESTOR' },
'23': { nombre: 'MARGARITA' },
'24': { nombre: 'MARIJO, ALEJANDRO' },
'25': { nombre: 'DIAZ ARIEL' },
'26': { nombre: 'SOL' },
'27': { nombre: 'GABRIEL, MARIANA' },
'28': { nombre: 'LUCAS' },
'29': { nombre: 'CHOCHIMON' },
'30': { nombre: 'EL BUEN DENISE' },
'31': { nombre: 'JESSICA' },
'32': { nombre: 'AXCEL' },
'33': { nombre: 'SANTIAGO, ERICA' },
'34': { nombre: 'DANIELA, RODRIGO' },
'35': { nombre: 'SEVERO, BEATRIZ' },
'36': { nombre: 'ALEJANDRITO, LA SEÑORA DE ALEJANDRITO' },
'37': { nombre: 'SANDRA' },
'38': { nombre: 'JORGE' },




  };

  invitacion: any = null;
  nombres:any=null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');

    if (codigo && this.invitados[codigo]) {
      this.invitacion = this.invitados[codigo];
      console.log(this.invitacion);

    } else {
      this.invitacion = null;
    }
  }

   isOpen = false;

  toggleEnvelope() {
    this.isOpen = !this.isOpen;
   }
}
