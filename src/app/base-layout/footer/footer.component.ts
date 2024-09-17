import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
  ];
  contactList =[
    {
      img:'../../../assets/images/email.svg',
      text:'sales@techcraftinnovations.com',
      url:'mailto:sales@techcraftinnovations.com'
    },
    {
      img:'../../../assets/images/phone.svg',
      text:'845-502-Tech(8324)',
      url:'tel:18455028324'
    }
  ]
}
