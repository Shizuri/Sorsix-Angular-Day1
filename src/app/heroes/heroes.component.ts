import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();

    heroes: Hero[] = [];

    constructor(private service: HeroService) {
        service.getHeroes().subscribe(next =>{
            console.log('Data', next);
            this.heroes = next;
            console.log('Heroes', this.heroes);
        });
    }

    ngOnInit(): void {

    }

    onSelect(hero: Hero) {
        console.log("on select", hero);
        this.selected.emit(hero);
        // this.selectedHero = hero;
    }

}
