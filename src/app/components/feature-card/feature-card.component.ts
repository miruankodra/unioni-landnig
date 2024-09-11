import { Component } from '@angular/core';
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-feature-card',
  standalone: true,
    imports: [
        TitleComponent
    ],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {

}
