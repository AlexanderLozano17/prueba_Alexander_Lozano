import { Routes } from "@angular/router";
import { PersonajeListarComponent } from "./pages/personaje-listar/personaje-listar.component";
import { PersonajeDetalleComponent } from "./pages/personaje-detalle/personaje-detalle.component";
import { PersonajeFormComponent } from "./pages/personaje-form/personaje-form.component";

export const PERSONAJE_ROUTES: Routes = [
    {path: '', component: PersonajeListarComponent},
    {path: 'personaje/:id/editar', component: PersonajeFormComponent},
    {path: 'personaje/id/detalle', component: PersonajeDetalleComponent }
];