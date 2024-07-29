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
  },
  {
    text:'Book a Meeting',
    url:'https://outlook.office.com/bookwithme/user/ecdab1dfbfc34b9a986151e64d6f2da5@techcraftinnovations.com?anonymous',
    target:"_blank"
  },
  {
    text:'Remote Support',
    url:'https://techcraft.screenconnect.com/',
    target:"_blank"
  }

 ]
}
