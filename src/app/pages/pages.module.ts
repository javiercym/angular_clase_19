import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from '../pipes/filtro.pipe';



@NgModule({
  declarations: [
    PagesComponent,
    CardComponent,
    FiltroPipe
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
