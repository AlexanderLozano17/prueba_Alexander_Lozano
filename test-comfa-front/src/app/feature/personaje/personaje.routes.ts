import { Routes } from "@angular/router";
import { PersonajeListarComponent } from "./pages/personaje-listar/personaje-listar.component";
import { PersonajeDetalleComponent } from "./pages/personaje-detalle/personaje-detalle.component";
import { PersonajesImportadosComponent } from "./pages/personajes-importados/personajes-importados.component";

export const PERSONAJE_ROUTES: Routes = [
    {path: '', component: PersonajeListarComponent},
    {path: 'id/detalle', component: PersonajeDetalleComponent },
    {path: 'importados', component: PersonajesImportadosComponent }
];