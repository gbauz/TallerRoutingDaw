import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  typesOfShoes: string[] = ['Diseño gráfico', 'Marketing Digital', 'Redaccción', 'Desarrollo web', 'Consultoria'];

}
