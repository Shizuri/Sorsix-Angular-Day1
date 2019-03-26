import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'heroes';

    selectedHero: Hero;

    messages: string[] = [];

    constructor( private messageService: MessageService){

        this.messages = messageService.getMessages();

    }

    onSelected(hero: Hero) {
        console.log("on selected in app component");
        this.selectedHero = hero;
    }

    onClear(){
        console.log("clear");
        this.messageService.clear();
    }
}
