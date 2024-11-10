import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  activeLink: string = 'home';  

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
