import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'heroes';

    selectedHero: Hero;

    onSelected(hero: Hero) {
        console.log("on selected in app component");
        this.selectedHero = hero;
    }
}
