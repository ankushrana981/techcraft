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
      text:'845-925-4318',
      url:'tel:8459254318'
    }
  ]
}
