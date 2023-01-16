import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  textoBuscar!:string;

  @Output() enviardata = new EventEmitter<string>();

  buscar(){
    alert(this.textoBuscar);
    this.enviardata.emit(this.textoBuscar)
  }
}
