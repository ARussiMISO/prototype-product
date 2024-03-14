import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
  },
  {
    path: 'paginaNoEncontrada',
    component: PaginaNoEncontradaComponent,
  },
  {
    path: 'cotizador',
    component: CotizadorComponent,
  },
  {
    path: 'informacion',
    component: InformacionComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
