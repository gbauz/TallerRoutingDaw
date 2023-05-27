import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PieComponent } from './components/pie/pie.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { DatosComponent } from './components/detalle/datos/datos.component';
import { FaqComponent } from './components/detalle/faq/faq.component';
import { ListadoComponent } from './components/detalle/listado/listado.component';
import { PromocionesComponent } from './components/detalle/promociones/promociones.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DetalleComponent },
  { path: 'dato', component: DatosComponent }, 
  { path: 'faq', component: FaqComponent },
  { path: 'lista', component: ListadoComponent },
  { path: 'promocion', component: PromocionesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
