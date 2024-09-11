import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {FeatureCardComponent} from "../../feature-card/feature-card.component";
import {TitleComponent} from "../../title/title.component";
import {SwiperContainer} from "swiper/swiper-element";

@Component({
  selector: 'app-activity',
  standalone: true,
    imports: [
        FeatureCardComponent,
        TitleComponent
    ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ActivityComponent implements OnInit {
  ngOnInit(): void {
    this._initSwiper();
  }

  _initSwiper(): void {
    const swiperContainer = document.querySelector('swiper-container') as SwiperContainer;
    const params = {
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        }
      },
      on: {
        init() {
          // ...
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }
}
