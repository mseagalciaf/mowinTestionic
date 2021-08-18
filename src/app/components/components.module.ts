import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShowHeroeComponent } from './show-heroe/show-heroe.component';



@NgModule({
  declarations: [ShowHeroeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [ShowHeroeComponent]
})
export class ComponentsModule { }
