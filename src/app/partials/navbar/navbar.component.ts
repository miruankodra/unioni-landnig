import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isToggled: boolean = false;

  toggleMenu(): void {
    this.isToggled = !this.isToggled;
    console.log(this.isToggled);
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

}
