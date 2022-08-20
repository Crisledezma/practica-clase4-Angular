import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/heroe.interface';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  
  constructor(
    public heroesService: HeroesService
    ) { }
    
  // heroe: Heroe = {
  //   heroeName: '',
  //   realName: '',
  //   image: ''
  // }
  
    ngOnInit(): void {
    console.log(this.heroesService);
  }

}
