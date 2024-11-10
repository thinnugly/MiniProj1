import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  activeLink: string = 'home';  

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
