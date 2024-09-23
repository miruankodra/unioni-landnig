import {Component, OnInit} from '@angular/core';
import {FeatureCardComponent} from "../../feature-card/feature-card.component";
import {TitleComponent} from "../../title/title.component";

@Component({
  selector: 'app-activity',
  standalone: true,
    imports: [
        FeatureCardComponent,
        TitleComponent
    ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {}
