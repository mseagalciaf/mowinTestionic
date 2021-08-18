import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeInterface } from 'src/app/interfaces/heroe-interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-carrousel-heroes',
  templateUrl: './carrousel-heroes.page.html',
  styleUrls: ['./carrousel-heroes.page.scss'],
})
export class CarrouselHeroesPage implements OnInit {

  heroes: HeroeInterface[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.heroes);
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  getHeroes() {
    this.heroes = this.heroesService.getAllSuperheroes();
  }

  viewMore(id: number) {
    this.router.navigate(['/tabs/list-heroes/show-heroe',id]);
  }

}
