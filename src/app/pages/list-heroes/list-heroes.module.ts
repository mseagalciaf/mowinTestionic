import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListHeroesPageRoutingModule } from './list-heroes-routing.module';

import { ListHeroesPage } from './list-heroes.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ComponentsModule,
    ListHeroesPageRoutingModule

  ],
  declarations: [ListHeroesPage]
})
export class ListHeroesPageModule {}
