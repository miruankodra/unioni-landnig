import {Component, input, output, OutputEmitterRef} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  height = input<string>('h-[54px]');
  width = input<string>('w-full');
  background = input<string>('bg-black');
  border = input<string>('border-none');
  radius = input<string>('rounded-[15px]')
  text = input<string>('text-[24px] text-white font-semibold');
  hover = input<string>('');

  onClick: OutputEmitterRef<void> = output<void>();

  onButtonClick(): void {
    this.onClick.emit();
  }
}
