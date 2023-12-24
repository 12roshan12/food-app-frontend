import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'authentication', loadChildren: () => import('./authentication/auth-main.module').then(m => m.AuthenticationModule) },
    { path: 'home', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
    {
        path: '**', redirectTo: 'home'
    }
];
