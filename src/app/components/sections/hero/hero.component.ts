import { Component } from '@angular/core';
import {BadgeComponent} from "../../badge/badge.component";
import {ButtonComponent} from "../../button/button.component";
import {TitleComponent} from "../../title/title.component";

@Component({
  selector: 'app-hero',
  standalone: true,
    imports: [
        BadgeComponent,
        ButtonComponent,
        TitleComponent
    ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
