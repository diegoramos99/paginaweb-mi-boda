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
    'familiacejas': { nombre: 'MONICA, AMADEO, JULIO, VERONICA, FERNANDO' },
'FamiliaDeDaiana': { nombre: 'MAYRA, LUCAS, FRANCISCO, NICOLAS' },
'Abuelos': { nombre: 'BENITA, VITALIO' },
'tiosCarrizo': { nombre: 'LORENA, DIEGO, FRANCISCO, JAZMIN, DALILA' },
'TioCejas': { nombre: 'ARIEL, IVANNA, HECTOR' },
'TiaArce': { nombre: 'LAURA, JULIANA' },
'PrimoLucas': { nombre: 'LUCAS, ABRIL, CIELO' },
'TioJulio': { nombre: 'MARTA, JULIO' },
'FamiliaPerez': { nombre: 'LUISA, SEBASTIAN, NICOLAS, BIANCA' },
'TiaMAria': { nombre: 'MARIA, LUNA' },
'PrimaYesica': { nombre: 'YESICA, NEHEMIAS' },
'PrimaMilagros': { nombre: 'MILAGROS, ARIEL' },
'Laabuela': { nombre: 'CELINA, ROMA' },
'cocó': { nombre: 'MARICRUZ, LA GORDITA' },
'hermanas': { nombre: 'MARIANA, MARCELA' },
'hermanamayor': { nombre: 'MARIA' },
'sonri': { nombre: 'SONRRI' },
'camila': { nombre: 'CAMILA, LUCAS' },
'nadia': { nombre: 'NADIA, TOMAS' },
'angi': { nombre: 'ANGELA' },
'lu': { nombre: 'LUCILA' },
'elbuennestor': { nombre: 'NESTOR' },
'abuelamarga': { nombre: 'MARGARITA' },
'marijo': { nombre: 'MARIJO, ALEJANDRO' },
'amigo': { nombre: 'ARIEL,SOL' },
'gabriel': { nombre: 'GABRIEL, MARIANA' },
'lucas': { nombre: 'LUCAS' },
'chochimon': { nombre: 'CHOCHIMON' },
'elbuendenis': { nombre: 'EL BUEN DENISE' },
'jessica': { nombre: 'JESSICA' },
'axel': { nombre: 'AXEL' },
'santiagoalto': { nombre: 'SANTIAGO, ERICA' },
'daniela': { nombre: 'DANIELA, RODRIGO' },
'bruno': { nombre: 'SEVERO, BEATRIZ' },
'elmascapito': { nombre: 'ALEJANDRITO, LA SEÑORA DE ALEJANDRITO' },
'sandra': { nombre: 'SANDRA ,su pareja' },
'jorgito': { nombre: 'JORGE' },




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
