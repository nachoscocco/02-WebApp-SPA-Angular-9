import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router} from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];
  
  constructor( private _heroesService: HeroesService, 
               private _router: Router) {
      console.log('constructor');
  
     }

   ngOnInit(): void {
    console.log('ngOnInit');
    console.log('////////////');
    this.heroes = this._heroesService.getHeoes();
  /*   console.log(this.heroes); */

  }
  verHeroe(idx: number ){
    /* console.log(idx); */
    this._router.navigate( ['/heroe', idx] )
  }
}
