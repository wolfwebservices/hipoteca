import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent ,
    AcercaComponent ,
    ServiciosComponent ,
    CalculadoraComponent  ,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: InicioComponent
      },

      {
        path: 'acerca',
        component: AcercaComponent
      },

      {
        path: 'servicios',
        component: ServiciosComponent
      },

      {
        path: 'calculadora',
        component: CalculadoraComponent
      },

      {
        path: 'contacto',
        component: ContactoComponent
      }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
