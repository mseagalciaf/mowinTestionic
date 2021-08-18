import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeInterface } from 'src/app/interfaces/heroe-interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.page.html',
  styleUrls: ['./list-heroes.page.scss'],
})
export class ListHeroesPage implements OnInit {

  heroes: HeroeInterface[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroesService.getAllSuperheroes();
  }

  viewMore(id: number) {
    this.router.navigate(['/tabs/list-heroes/show-heroe',id]);
  }

}
