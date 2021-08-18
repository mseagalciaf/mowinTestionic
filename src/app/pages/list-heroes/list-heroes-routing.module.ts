import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowHeroeComponent } from 'src/app/components/show-heroe/show-heroe.component';

import { ListHeroesPage } from './list-heroes.page';

const routes: Routes = [
  {
    path: '',
    component: ListHeroesPage
  },
  {
    path: 'show-heroe/:id', component: ShowHeroeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHeroesPageRoutingModule {}
