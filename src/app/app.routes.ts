import { Routes } from '@angular/router';
import { Home } from "./pages/home/home";
import { Asistencia } from "./pages/asistencia/asistencia";
import { Ubicacion } from "./pages/ubicacion/ubicacion";
export const routes: Routes = [

    {path: '', component: Home},
    {path: 'asistencia', component: Asistencia},
    {path: 'ubicacion', component: Ubicacion},
];
