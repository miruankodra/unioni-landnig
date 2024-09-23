import {Component} from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {BadgeComponent} from "../../components/badge/badge.component";
import {ButtonComponent} from "../../components/button/button.component";
import {FeatureCardComponent} from "../../components/feature-card/feature-card.component";
import {ContactComponent} from "../../components/sections/contact/contact.component";
import {HeroComponent} from "../../components/sections/hero/hero.component";
import {AboutComponent} from "../../components/sections/about/about.component";
import {ActivityComponent} from "../../components/sections/activity/activity.component";
import {StatsComponent} from "../../components/sections/stats/stats.component";
import {SponsorsComponent} from "../../components/sections/sponsors/sponsors.component";
import {CTAComponent} from "../../components/sections/cta/cta.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitleComponent,
    BadgeComponent,
    ButtonComponent,
    FeatureCardComponent,
    ContactComponent,
    HeroComponent,
    AboutComponent,
    ActivityComponent,
    StatsComponent,
    SponsorsComponent,
    CTAComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})



export class HomeComponent {

}
