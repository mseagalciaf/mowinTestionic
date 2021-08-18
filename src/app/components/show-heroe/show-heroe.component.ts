import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss'],
})
export class ShowHeroeComponent implements OnInit {
  heroe: any;
  idHeroe;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroe();
  }

  getHeroe() {
    let id = this.route.snapshot.params.id;
    this.heroe = this.heroesService.getOneSuperheroe(id);
  }

  goToBack() {
    this.location.back();
  }

}
