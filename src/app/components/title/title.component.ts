import {Component, input} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  color = input<string>('text-se-green')
  size = input<string>('text-2xl')
  weight = input<string>('font-semibold')
  font = input<string>('')
}
