import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
