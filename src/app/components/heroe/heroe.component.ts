import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
    
    heroe: Heroe;
    logoDC: boolean;
    logoMarvel: boolean;
   

  constructor( private activateRoute: ActivatedRoute,
               private _herosService: HeroesService,
               private route: Router  ) {
    
      this.activateRoute.params.subscribe(params => {
        console.log( params['id'] );
        this.heroe = this._herosService.getHeroe(params['id'] );
        if(this.heroe.casa === 'DC'){
          this.logoDC = true;
        }else {
          this.logoMarvel = true;
        }

      });

   }

  ngOnInit(): void {
  }

  volverHeroes(){
    this.route.navigate(['/heroes']);
  }

}
