import { Component } from '@angular/core';
import { AboutComponent } from './app.about';
export class Hero{
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/nav.html'
})
export class AppComponent {
	title= 'D4n D4n';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
 }
