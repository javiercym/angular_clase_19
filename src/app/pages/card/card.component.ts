import { Component,Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() datollego!: string;

  input!:any[];

  constructor(private data:DataService){
  }

  ngOnInit(): void {
    this.data.GetAll().subscribe( data => console.log(data));
  }

}
