import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  constructor(private snackBar: MatSnackBar) { }
  mostrarMensajeEmergente() {
    this.snackBar.open('Datos Guardados', 'Cerrar', {
      duration: 2000, // Duración en milisegundos
    });
  }
  
}
