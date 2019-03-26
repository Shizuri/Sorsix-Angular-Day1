import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock.heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes = HEROES;
    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();

    constructor() { }

    ngOnInit(): void {

    }

    onSelect(hero: Hero) {
        console.log("on select", hero);
        this.selected.emit(hero);
        // this.selectedHero = hero;
    }

}
