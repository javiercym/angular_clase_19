import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    BuscadorComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
