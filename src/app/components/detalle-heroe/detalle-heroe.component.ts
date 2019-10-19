import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../service/heroes.service';


@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.sass']
})
export class DetalleHeroeComponent implements OnInit {

  heroe:any = {};

  constructor(
    private activeRoute:ActivatedRoute,
    private heroeService: HeroesService
  ) { 
    this.activeRoute.params.subscribe(params => {
      this.heroe = this.heroeService.findHeroeById(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
