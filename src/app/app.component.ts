import { Component } from '@angular/core';
import { Hero } from "./hero";

const HEROES: Hero[] = [
{id: 11, name: 'Bob'},
{id: 12, name: 'John'},
{id: 13, name: 'Mary'},
{id: 14, name: 'Jim'},
{id: 15, name: 'Will'},
{id: 16, name: 'Tom'},
{id: 17, name: 'Tim'},
{id: 18, name: 'Bill'},
{id: 19, name: 'Bobert'},
{id: 20, name: 'Rob'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bobs uncles app';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
