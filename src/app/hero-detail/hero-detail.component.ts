import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Route, ActivatedRoute } from '@angular/router';
import { map, flatMap, mergeMap } from 'rxjs/operators'
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    // @Input() hero: Hero;
    hero: Hero;

    constructor(private route: ActivatedRoute, private service: HeroService) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            map(it => +it.get('id')),
            mergeMap(id => this.service.getHeroById(id))
        ).subscribe(hero => {
            console.log(hero);
            console.log(typeof hero);
            this.hero = hero;
        });
    }

}
