import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list-heroes',
        loadChildren: () => import('../pages/list-heroes/list-heroes.module').then( m => m.ListHeroesPageModule)
      },
      {
        path: 'carrousel-heroes',
        loadChildren: () => import('../pages/carrousel-heroes/carrousel-heroes.module').then( m => m.CarrouselHeroesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/list-heroes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
