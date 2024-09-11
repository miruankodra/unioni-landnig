import { Component } from '@angular/core';
import {BadgeComponent} from "../../badge/badge.component";
import {ButtonComponent} from "../../button/button.component";
import {TitleComponent} from "../../title/title.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        BadgeComponent,
        ButtonComponent,
        TitleComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
