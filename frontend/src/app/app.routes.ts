import { Routes } from '@angular/router';
import { Home } from './features/auth/home/home';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register},
    { path: '**', redirectTo: '' }
];
