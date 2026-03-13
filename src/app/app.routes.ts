import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Catalogo } from './components/catalogo/catalogo';
import { Prestamos } from './components/prestamos/prestamos';
import { Devolver } from './components/devolver/devolver';
import { Multas } from './components/multas/multas';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  { path: '', component: Login },

  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'catalogo', component: Catalogo },
      { path: 'prestamos', component: Prestamos },
      { path: 'devolver', component: Devolver },
      { path: 'multas', component: Multas },
    ],
  },

  // Redirigir cualquier otra ruta al login
  { path: '**', redirectTo: '' },
];
