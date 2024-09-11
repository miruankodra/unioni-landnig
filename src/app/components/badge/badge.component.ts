import { Component } from '@angular/core';
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {

}
