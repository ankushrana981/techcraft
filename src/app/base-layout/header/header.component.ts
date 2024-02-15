import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 navList = [
  {
    text:'Home',
    url:'#'
  },
  {
    text:'About',
    url:'#about'
  },
  {
    text:'Our Mission',
    url:'#our-mission'
  },
  {
    text:'Contact',
    url:'#contact'
  }

 ]
}
