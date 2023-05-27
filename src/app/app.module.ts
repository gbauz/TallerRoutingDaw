import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PieComponent } from './components/pie/pie.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DatosComponent } from './components/detalle/datos/datos.component';
import {MatTableModule} from '@angular/material/table';
import { FaqComponent } from './components/detalle/faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListadoComponent } from './components/detalle/listado/listado.component';
import {MatListModule} from '@angular/material/list';
import { PromocionesComponent } from './components/detalle/promociones/promociones.component';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    DetalleComponent,
    PieComponent,
    DatosComponent,
    FaqComponent,
    ListadoComponent,
    PromocionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,    
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
