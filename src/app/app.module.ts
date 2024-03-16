import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from 'src/shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { ToastrModule } from 'ngx-toastr';
import { ElementoPopupComponent } from './elemento-popup/elemento-popup.component';
import { BuscadorServicioComponent } from './buscador-servicio/buscador-servicio.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ContactoComponent,
    CotizadorComponent,
    InformacionComponent,
    PaginaNoEncontradaComponent,
    ElementoPopupComponent,
    BuscadorServicioComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
