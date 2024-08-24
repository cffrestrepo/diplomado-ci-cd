import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  termino:string;

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private route: Router ) {

                this.activateRoute.params.subscribe(params => {
                  this.termino =  params['text'] ;
                  this.heroes = this._heroesService.BuscarHeroe (params['text'] );
                });


              }

  ngOnInit(): void {

  }

  verHeroe(idx:number){
    console.log(idx);
    this.route.navigate(['/heroe', idx]);
  }

}