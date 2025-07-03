import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'personajes',
        loadChildren: () => import('./feature/personaje/personaje.routes').then(m => m.PERSONAJE_ROUTES)
    }
];
