import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrouselHeroesPageRoutingModule } from './carrousel-heroes-routing.module';

import { CarrouselHeroesPage } from './carrousel-heroes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrouselHeroesPageRoutingModule
  ],
  declarations: [CarrouselHeroesPage]
})
export class CarrouselHeroesPageModule {}
