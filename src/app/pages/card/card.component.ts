import { Component,Input, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokeapi-response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  textoBuscar!: string;
  pokemon:Pokemon[]=[];
  pagina=0;

  constructor(private data:DataService){}

  ngOnInit(): void {
    this.data.GetAll().subscribe(resp=>{
      this.pokemon = resp;
    })
  }
  buscador(textoBuscar:string){
    this.pagina = 0;
    // console.log(textoBuscar)
    this.textoBuscar = textoBuscar
  }
 }
