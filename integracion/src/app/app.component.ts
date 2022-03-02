import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bienvenida = '';
  nombreUsuario= '';
  constructor() { }

  asignarNombre(valor:string){
    this.bienvenida = 'Bienvenid@ ' + valor;
  }
}
