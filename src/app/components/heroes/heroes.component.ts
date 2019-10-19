import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  public heroes:any[];

  constructor( 
    private _heroesSerce:HeroesService,
    private route:Router
   ) { 
    this.heroes = this._heroesSerce.getHeroes();
  }

  ngOnInit() {
    //console.log(this.heroes);
  }

  verHeroe( index:number ) {
    this.route.navigate(['/heroe', index]);
  }

}
