import { Routes } from '@angular/router';
import { Home } from "./pages/home/home";
import { Asistencia } from "./pages/asistencia/asistencia";
import { Ubicacion } from "./pages/ubicacion/ubicacion";
import { Asientos } from "./pages/asientos/asientos";
import { ListaRegalos } from './pages/lista-regalos/lista-regalos';
import { Invitacion } from './pages/invitacion/invitacion';
export const routes: Routes = [

    {path: '', component: Home},
     {path: 'home', component: Home},
    {path: 'asistencia', component: Asistencia},
    {path: 'ubicacion', component: Ubicacion},
    {path: 'asientos', component: Asientos},
    {path: 'regalos', component: ListaRegalos},
    {path: 'invitacion/:codigo', component: Invitacion},

];
