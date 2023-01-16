import { Component,Input, OnInit } from '@angular/core';
import { PokeapiResponse } from 'src/app/interface/pokeapi-response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() datollego!: string;

  input!:PokeapiResponse['results'];

  constructor(private data:DataService){
  }

  ngOnInit(): void {
    // this.data.GetAll().subscribe( data => console.log(data));

    this.data.GetAll().subscribe( data => {
      this.input = data.results;
      console.log(this.input);
    });
  }
  ngOnChanges() {
    if (this.datollego) {
        this.input = this.input.filter(item => item.name.toLowerCase().includes(this.datollego.toLowerCase()));
    }
 }

}
